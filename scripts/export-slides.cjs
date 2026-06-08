const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer-core");
const { PDFDocument } = require("pdf-lib");

function parseArgs(argv) {
    const args = {};
    for (let i = 0; i < argv.length; i += 1) {
        const arg = argv[i];
        if (!arg.startsWith("--")) continue;
        const key = arg.slice(2);
        const next = argv[i + 1];
        if (!next || next.startsWith("--")) {
            args[key] = true;
        } else {
            args[key] = next;
            i += 1;
        }
    }
    return args;
}

function defaultOutputPath(inputPath) {
    const dir = path.dirname(inputPath);
    const base = path.basename(inputPath, path.extname(inputPath));
    return path.join(dir, `${base}-final.pdf`);
}

function findChromePath() {
    const platform = process.platform;
    const candidates = [];
    if (platform === "win32") {
        candidates.push(
            "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
            "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
            "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
            "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
        );
    } else if (platform === "darwin") {
        candidates.push(
            "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
            "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
        );
    } else {
        candidates.push(
            "/usr/bin/google-chrome",
            "/usr/bin/google-chrome-stable",
            "/usr/bin/chromium-browser",
            "/usr/bin/chromium",
            "/usr/bin/microsoft-edge",
        );
    }
    return candidates.find((candidate) => fs.existsSync(candidate));
}

function usage() {
    return [
        "Usage:",
        "  node export-slides.cjs --input <path> [--output <path>]",
        "Options:",
        "  --width <px>       Slide width. Default 1920",
        "  --height <px>      Slide height. Default 1080",
        "  --scale <num>      Device scale factor. Default 1",
        "  --settle-ms <ms>   Animation settle time. Default 120",
        "  --chrome <path>    Browser executable path",
    ].join("\n");
}

async function main() {
    const args = parseArgs(process.argv.slice(2));
    if (args.help || args.h || !args.input) {
        console.log(usage());
        process.exit(args.input ? 0 : 1);
    }

    const inputPath = path.resolve(args.input);
    if (!fs.existsSync(inputPath)) {
        console.error(`Input file not found: ${inputPath}`);
        process.exit(1);
    }

    const outputPath = path.resolve(args.output || defaultOutputPath(inputPath));
    const width = Number(args.width) || 1920;
    const height = Number(args.height) || 1080;
    const scale = Number(args.scale) || 1;
    const settleMs = Number(args["settle-ms"]) || 120;
    const chromePath = args.chrome || findChromePath();

    if (!chromePath) {
        console.error("No Chrome or Edge executable found. Use --chrome to set it.");
        process.exit(1);
    }

    const fileUrl = "file:///" + inputPath.replace(/\\/g, "/");

    const browser = await puppeteer.launch({
        executablePath: chromePath,
        headless: "new",
        args: ["--allow-file-access-from-files"],
    });
    const page = await browser.newPage();
    await page.setViewport({
        width,
        height,
        deviceScaleFactor: scale,
    });
    await page.goto(fileUrl, { waitUntil: "networkidle0" });
    await page.emulateMediaType("screen");
    // Wait for React to render — createRoot renders asynchronously after networkidle0
    await page.waitForSelector(".slide", { timeout: 15000 });
    await page.evaluate(() => document.fonts.ready);

    await page.addStyleTag({
        content: `
            html, body { scroll-snap-type: none !important; scroll-behavior: auto !important; }
            .rv, .rvl, .rvs, .rvw, .rv-word > span { opacity: 1 !important; transform: none !important; clip-path: inset(0 0 0 0) !important; }
            .slide[data-leaving] .content { opacity: 1 !important; transform: none !important; }
            #progressBar, #navDots, #slideCounter { display: none !important; }
        `,
    });

    const slideCount = await page.evaluate(
        () => document.querySelectorAll(".slide").length,
    );
    if (!slideCount) {
        console.error("No .slide elements found in the deck.");
        await browser.close();
        process.exit(1);
    }

    const merged = await PDFDocument.create();

    for (let i = 0; i < slideCount; i += 1) {
        await page.evaluate((idx) => {
            const slides = Array.from(document.querySelectorAll(".slide"));
            slides.forEach((slide, sidx) => {
                slide.style.display = sidx === idx ? "flex" : "none";
                if (sidx === idx) {
                    slide.classList.add("visible");
                    slide.removeAttribute("data-leaving");
                }
            });
            document.querySelectorAll("[data-count-to]").forEach((el) => {
                const to = parseFloat(el.dataset.countTo);
                if (Number.isNaN(to)) return;
                const prefix = el.dataset.countPrefix || "";
                const suffix = el.dataset.countSuffix || "";
                const decimals = parseInt(el.dataset.countDecimals || "0", 10);
                el.textContent = prefix + to.toFixed(decimals) + suffix;
            });
            document.documentElement.style.height = "100vh";
            document.body.style.height = "100vh";
            window.scrollTo(0, 0);
        }, i);

        await page.evaluate(
            (delay) =>
                new Promise((resolve) => {
                    requestAnimationFrame(() =>
                        requestAnimationFrame(() => resolve()),
                    );
                }).then(() => new Promise((resolve) => setTimeout(resolve, delay))),
            settleMs,
        );

        await page.evaluate(() => {
            const animations = document.getAnimations({ subtree: true });
            animations.forEach((anim) => {
                const timing =
                    anim.effect && anim.effect.getComputedTiming
                        ? anim.effect.getComputedTiming()
                        : null;
                if (!timing) return;
                let endTime = 0;
                if (Number.isFinite(timing.endTime)) {
                    endTime = timing.endTime;
                } else if (Number.isFinite(timing.duration)) {
                    endTime = timing.duration;
                }
                anim.currentTime = endTime;
                anim.pause();
            });
        });

        const pdfBytes = await page.pdf({
            width: `${width}px`,
            height: `${height}px`,
            printBackground: true,
            margin: { top: "0px", right: "0px", bottom: "0px", left: "0px" },
            pageRanges: "1",
        });
        const single = await PDFDocument.load(pdfBytes);
        const [copied] = await merged.copyPages(single, [0]);
        merged.addPage(copied);
    }

    const outBytes = await merged.save();
    fs.writeFileSync(outputPath, outBytes);
    await browser.close();
    console.log(outputPath);
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
