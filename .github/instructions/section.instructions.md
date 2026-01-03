---
applyTo: "src/sections/*.tsx"
---

# Slide Content Creation Instructions

When creating or modifying slide content in `src/sections/` files:

## Core Principles

**Readability First:**
- Each slide should convey 1-2 key concepts maximum
- Use white space to prevent visual clutter
- Maintain clear typography hierarchy
- Keep bullet points to 3-5 items per list

**Visual Balance:**
- Avoid text walls: no more than 3-4 short paragraphs per slide
- Don't stack more than 3 major sections vertically
- Use 2-column grids for comparisons, 1-column for sequential content
- Always wrap main content in `max-w-3xl mx-auto` and use `space-y-6`

**Presentation Style:**
- Follow the 4D AI Fluency Framework color scheme strictly
- Use established component patterns (definition boxes, content cards, callouts)
- Maintain consistency with existing slides in tone and structure

## Required Slide Structure

```tsx
{
  title: string,      // Main heading - concise, descriptive
  subtitle: string,   // Supporting context - one clear sentence
  content: JSX.Element // React component with Tailwind classes
}
```

## Color Scheme by Topic

- **Delegation**: Blue (`blue-500`, `blue-50`, `blue-100`, `blue-200`, `blue-900`)
- **Description**: Green (`green-500`, `green-50`, `green-100`, `green-200`, `green-900`)
- **Discernment**: Purple (`purple-500`, `purple-50`, `purple-100`, `purple-200`, `purple-900`)
- **Diligence**: Orange (`orange-500`, `orange-50`, `orange-100`, `orange-200`, `orange-900`)
- **Overview/Intro**: Gray (`gray-100`, `gray-600`, `gray-800`) with multi-color accent cards
- **Tool Demos**: Match related 4D topic or use neutral gray

## Component Patterns

**1. Definition Slide Pattern** (for introducing concepts):
```tsx
<div className="flex flex-col space-y-6 max-w-3xl mx-auto">
  <div className="bg-{color}-50 p-6 rounded-lg border-l-4 border-{color}-500">
    <h3 className="text-2xl font-bold text-{color}-900 mb-4">What is [Concept]?</h3>
    <p className="text-lg text-gray-700">One clear, concise definition. Max 2 sentences.</p>
  </div>
  <div className="grid grid-cols-1 gap-4">
    <div className="bg-white p-5 rounded-lg shadow border border-{color}-200">
      <h4 className="font-semibold text-{color}-900 mb-2">Key Aspects:</h4>
      <ul className="space-y-2 text-gray-700">
        <li>• 3-5 bullet points maximum</li>
        <li>• Each point: one line preferred, two lines maximum</li>
      </ul>
    </div>
  </div>
  <div className="bg-{color}-100 p-4 rounded-lg">
    <p className="text-sm italic text-{color}-900">
      <strong>Key Takeaway:</strong> One memorable sentence.
    </p>
  </div>
</div>
```

**2. Overview/Grid Slide Pattern** (for multiple related items):
```tsx
<div className="flex flex-col items-center justify-center h-full space-y-8">
  <p className="text-xl text-gray-700 max-w-2xl text-center">One sentence of context (optional).</p>
  <div className="relative w-full max-w-3xl">
    <div className="grid grid-cols-2 gap-6">
      <div className="bg-{color}-500 text-white p-6 rounded-lg shadow-lg">
        <div className="text-2xl font-bold mb-2">Item Title</div>
        <div className="text-sm">One short sentence description</div>
      </div>
      {/* Max 4 items (2x2 grid) */}
    </div>
  </div>
</div>
```

**3. List/Details Slide Pattern** (for step-by-step content):
```tsx
<div className="flex flex-col space-y-6 max-w-3xl mx-auto">
  <div className="bg-{color}-50 p-6 rounded-lg border-l-4 border-{color}-500">
    <h3 className="text-2xl font-bold text-{color}-900 mb-4">Topic Title</h3>
    <p className="text-lg text-gray-700">One clear sentence explaining the topic.</p>
  </div>
  <div className="grid grid-cols-1 gap-4">
    <div className="bg-white p-5 rounded-lg shadow border border-{color}-200">
      <h4 className="font-semibold text-{color}-900 mb-2">Section 1:</h4>
      <ul className="space-y-2 text-gray-700">
        <li>• 3-5 bullet points</li>
      </ul>
    </div>
    {/* Maximum 2 content cards */}
  </div>
  <div className="bg-{color}-100 p-4 rounded-lg">
    <p className="text-sm italic text-{color}-900">
      <strong>Remember:</strong> One actionable insight.
    </p>
  </div>
</div>
```

## Content Density Rules

1. **Bullet Points**: Max 5 bullets per list, 1-2 lines each
2. **Paragraphs**: Max 3 short paragraphs per slide, 2-3 sentences each
3. **Cards/Sections**: Max 3 major vertical sections per slide
4. **Grid Items**: 2x2 grid maximum (4 items), title + 1-2 sentence description
5. **Text Sizes**: Headings `text-2xl font-bold`, body `text-lg`, captions `text-sm`

## Hyperlinks

**Always make URLs and repository references clickable:**
- Convert plain text URLs to `<a>` tags with proper attributes
- Format: `<a href="https://..." target="_blank" rel="noopener noreferrer" className="text-{color}-600 hover:underline">display text</a>`
- Use color-appropriate link styling (e.g., `text-purple-600` for purple-themed slides)
- GitHub repos: convert `owner/repo` to full GitHub URLs
- Always include `target="_blank"` and `rel="noopener noreferrer"` for external links

## Common Mistakes to Avoid

❌ More than 3 major sections vertically stacked
❌ Long paragraphs or lists exceeding 5 items
❌ Inconsistent colors for topic
❌ Poor hierarchy (all text same size/weight)
❌ Missing `space-y-6` or `gap-4`
❌ Nested complexity (sub-bullets with sub-bullets)
❌ Plain text URLs or repository references without links

✅ Clear focus, adequate spacing, visual variety, scannable content
