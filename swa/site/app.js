// Language toggle (EN/NL). English is the markup default; Dutch lives here.
const NL = {
  navAgenda: 'Agenda',
  navTailored: 'Sessie op maat',
  navDeck: 'Slidedeck',
  eyebrow: 'Volgende workshop · november 2026',
  lede: 'AI verandert de manier waarop software gebouwd wordt. Het meeste wat je erover hoort is hype, of vakjargon zonder veel inhoud. Deze sessie is anders.',
  register: 'Registratie opent binnenkort',
  deck: 'Bekijk de slidedeck',
  whenLabel: 'Wanneer',
  whenNote: 'Exacte datum volgt',
  timeLabel: 'Tijd',
  timeNote: 'Deuren open om 17:30, met eten vooraf',
  whereLabel: 'Waar',
  priceLabel: 'Prijs',
  priceNote: 'Per persoon, één prijs voor de hele avond',
  invoice: 'Factuur nodig? Geef je btw-gegevens door en je ontvangt die na de sessie.',
  agendaHeading: 'Agenda',
  agendaNote: 'Nieuwe data komen erbij zodra ze gepland zijn.',
  ev1Day: 'Datum volgt',
  ev1Meta: 'Avondsessie · 18:00–21:30 · deuren 17:30, met eten vooraf · [LOCATION]',
  ev1Status: 'Registratie binnenkort',
  aboutHeading: 'Concepten en praktijk, de hele avond door elkaar.',
  about1: 'Jan neemt je mee doorheen wat AI native software engineering eigenlijk betekent en hoe je het toepast: de terminologie (agentic, AI native, vibe coding), de tools, en de concrete workflows, gebaseerd op jarenlange ervaring als open source developer.',
  about2: 'Concepten en praktijk lopen de hele avond door elkaar, niet opgesplitst in theorie en hands-on. Je gaat naar huis met zowel het vocabulaire om over dit werk te praten als concrete voorbeelden om mee aan de slag te gaan.',
  takeHeading: 'Wat je meeneemt',
  take1Title: 'Het vocabulaire',
  take1Body: 'Agentic, AI native, vibe coding: wat de woorden betekenen en hoe je ze gebruikt met je team.',
  take2Title: 'Tools en workflows',
  take2Body: 'De tools en de echte workflows achter AI native engineering, zonder de hype.',
  take3Title: 'Voorbeelden om mee te bouwen',
  take3Body: 'Concrete implementatievoorbeelden waar je meteen mee aan de slag kunt.',
  practicalHeading: 'Praktisch',
  practical1: 'Geen laptop nodig, enkel iets om notities te nemen.',
  practical2: 'Eén pauze halverwege de avond.',
  practical3: 'Tijd om verder te praten nadat de formele Q&A is afgesloten.',
  practical4: 'Slides en materiaal worden na de sessie gedeeld.',
  tailoredHeading: 'Voor je team? Boek een sessie op maat.',
  tailoredBody: 'Breng de workshop naar je bedrijf. Neem contact op en we stemmen de sessie af op je team, je tools en je vragen.',
  tailoredCta: 'Vraag een sessie op maat aan',
  tailoredFact1: '6 uur: een volledige dag, of 2 × 3 uur in de avond',
  tailoredFact2: 'Teams en individuen',
  tailoredFact3: "Hands-on demo's met echte tools",
  closing: 'Of je nu aan het begin van je AI native traject staat of al onderweg bent: je vertrekt met een volle rugzak, terminologie en implementatievoorbeelden, klaar om mee aan de slag te gaan.',
  footer: 'Slides en materiaal worden na de sessie gedeeld.',
};

const STORAGE_KEY = 'workshop_lang';
const nodes = Array.from(document.querySelectorAll('[data-i18n]'));
const EN = new Map(nodes.map((el) => [el, el.textContent]));

function setLang(lang) {
  for (const el of nodes) {
    el.textContent = lang === 'nl' ? NL[el.dataset.i18n] ?? EN.get(el) : EN.get(el);
  }
  document.documentElement.lang = lang;
  for (const btn of document.querySelectorAll('.lang-btn')) {
    btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
  }
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // storage unavailable: language just won't persist
  }
}

for (const btn of document.querySelectorAll('.lang-btn')) {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
}

let initial = 'en';
try {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'nl' || stored === 'en') initial = stored;
  else if ((navigator.language || '').toLowerCase().startsWith('nl')) initial = 'nl';
} catch {
  // ignore
}
if (initial !== 'en') setLang(initial);
