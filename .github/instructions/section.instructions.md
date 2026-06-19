---
applyTo: "src/sections/*.tsx"
---

# Slide Content Creation Instructions

When creating or modifying slide content in `src/sections/` files:

## IMPORTANT: Adding New Sections

When creating a **new section file** (e.g., `newsection.tsx`):

1. **Create the file** in `src/sections/newsection.tsx` with slides array export
2. **Export in index.ts**: Add `export { newsectionSlides } from './newsection';` to `src/sections/index.ts`
3. **Import in main.tsx**: Add the import to the import statement in `src/main.tsx`
4. **Add to slides array**: Include `...newsectionSlides` in the slides array in `src/main.tsx` in the desired order
5. **Add to sidebar navigation**: Add the section to the `sections` array in `src/main.tsx` with icon and color

✅ All files must be updated for the new section to appear in the presentation and sidebar.

### Section Title Slide (REQUIRED)

Every section **must** begin with a title slide as its first slide. This serves as a visual divider announcing the section.

**Title Slide Pattern:**
```tsx
import { IconName } from 'lucide-react';
import { SlideType } from './types';

export const sectionSlides: SlideType[] = [
  {
    title: "",
    subtitle: "",
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-6">
        <IconName className="w-20 h-20 text-{color}-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-{color}-900 text-center">
          Section Name
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-2xl">
          Brief tagline describing what this section covers
        </p>
        <div className="flex space-x-2 mt-4">
          <div className="w-3 h-3 bg-{color}-300 rounded-full"></div>
          <div className="w-3 h-3 bg-{color}-500 rounded-full"></div>
          <div className="w-3 h-3 bg-{color}-300 rounded-full"></div>
        </div>
      </div>
    )
  },
  // ... rest of section slides
];
```

**Title Slide Requirements:**
- `title` and `subtitle` must be empty strings (hides the standard header)
- Use a relevant Lucide icon at `w-20 h-20` size
- Section name in `text-5xl md:text-6xl font-bold`
- Short tagline (one line) describing the section's focus
- Three decorative dots in the section's color scheme
- Icon and colors should match the section's theme
- **CRITICAL: Choose a unique icon not already used by other sections** - check the existing sections array in main.tsx to avoid duplicates

**Recommended Icons by Topic:**
- LLMs/AI: `Sparkles`, `Brain`, `Cpu`
- Models: `Box`, `Layers`
- Framework: `Target`, `Compass`
- Code/Copilot: `Code`, `Bot`
- Instructions: `ScrollText`, `FileText`
- Skills: `Puzzle`, `Wrench`
- Spaces/Organization: `Layout`, `FolderOpen`
- Windows/UI: `Monitor`, `PanelLeft`
- Multi-Agent: `Network`, `Users`
- Workflows: `Repeat`, `RefreshCw`
- Context: `Brain`, `Database`

### Sidebar Configuration

The sidebar navigation is defined in the `sections` array at the top of `src/main.tsx`. Each section requires:

```tsx
{ name: 'Section Name', slides: newsectionSlides, color: 'blue', icon: IconName }
```

**Required properties:**
- `name`: Display name shown in the sidebar
- `slides`: The imported slides array from the section file
- `color`: One of `'gray'`, `'blue'`, `'green'`, `'purple'`, `'orange'`
- `icon`: A lucide-react icon component (must be imported at the top of main.tsx)

**Example - Adding a new "Testing" section:**

1. Import the icon in main.tsx:
   ```tsx
   import { ..., TestTube } from 'lucide-react';
   ```

2. Add to the sections array:
   ```tsx
   { name: 'Testing', slides: testingSlides, color: 'green', icon: TestTube },
   ```

3. Also add `...testingSlides` to the `slides` array in the component.

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
- Follow the established color scheme strictly
- Use established component patterns (definition boxes, content cards, callouts)
- Maintain consistency with existing slides in tone and structure

## Validation (REQUIRED)

After making any changes to slide files:

1. **Syntax Check**: Ensure all slide objects have proper opening `{` and closing `}` braces
2. **Array Structure**: Verify each slide in the array is properly separated by commas
3. **JSX Balance**: Confirm all JSX tags are properly opened and closed
4. **TypeScript Errors**: Check for any compile errors before considering the task complete

⚠️ Always validate correctness of the modified code - do not assume edits are error-free.

## Required Slide Structure

```tsx
{
  title: string,      // Main heading - concise, descriptive
  subtitle: string,   // Supporting context - one clear sentence
  content: JSX.Element // React component with Tailwind classes
}
```

## Color Scheme

- **Blue**: `blue-500`, `blue-50`, `blue-100`, `blue-200`, `blue-900`
- **Green**: `green-500`, `green-50`, `green-100`, `green-200`, `green-900`
- **Purple**: `purple-500`, `purple-50`, `purple-100`, `purple-200`, `purple-900`
- **Orange**: `orange-500`, `orange-50`, `orange-100`, `orange-200`, `orange-900`
- **Gray** (Overview/Intro): `gray-100`, `gray-600`, `gray-800` with multi-color accent cards

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

**4. 2-Column Comparison Pattern**:
```tsx
<div className="flex flex-col space-y-6 max-w-3xl mx-auto">
  <div className="bg-{color}-50 p-6 rounded-lg border-l-4 border-{color}-500">
    <h3 className="text-2xl font-bold text-{color}-900 mb-4">Topic Title</h3>
    <p className="text-lg text-gray-700">One clear sentence explaining the topic.</p>
  </div>

  <div className="grid grid-cols-2 gap-4">
    <div className="bg-white p-5 rounded-lg shadow border border-{color}-200">
      <h4 className="font-semibold text-{color}-900 mb-2">Section 1:</h4>
      <ul className="space-y-2 text-gray-700">
        <li>• Concise bullet point</li>
        <li>• 3-4 items maximum per column</li>
      </ul>
    </div>
    <div className="bg-white p-5 rounded-lg shadow border border-{color}-200">
      <h4 className="font-semibold text-{color}-900 mb-2">Section 2:</h4>
      <ul className="space-y-2 text-gray-700">
        <li>• Parallel structure</li>
        <li>• Balanced content</li>
      </ul>
    </div>
  </div>

  {/* Optional: code example or additional content */}

  <div className="bg-{color}-100 p-4 rounded-lg">
    <p className="text-sm italic text-{color}-900">
      <strong>Key Point:</strong> One memorable takeaway.
    </p>
  </div>
</div>
```

**5. Tool Comparison Matrix Pattern** (capability-first cross-tool slides):

Use the shared `ToolMatrix` component from `src/components/ToolMatrix.tsx` for cross-tool configuration comparisons.

```tsx
import { ToolMatrix, STANDARD_TOOL_COLUMNS } from '../components/ToolMatrix';
import { instructionsMatrixRows } from '../components/toolMatrixRows';

{
  title: "Where Do I Put Instructions?",
  subtitle: "Same capability, different paths per tool",
  content: (
    <div className="flex flex-col space-y-4 max-w-4xl mx-auto">
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <p className="text-gray-700">Rows = capability concepts. Columns = tools. Answer &quot;where do I put X?&quot; first.</p>
      </div>
      <ToolMatrix
        columns={STANDARD_TOOL_COLUMNS}
        rows={instructionsMatrixRows}
        footnote="Primary columns: Cursor, Claude Code, Copilot. Secondary: Codex, Devin Desktop."
      />
    </div>
  )
}
```

**Matrix rules:**
- Max **6 rows** per slide; split by group if exceeded
- **Primary columns** (Cursor, Claude Code, Copilot): full detail in cells
- **Secondary columns** (Codex, Devin Desktop): path + brief note or "—"
- Cell kinds: `text`, `code`, `link`, `status` (yes/no/partial/na)
- Mobile: row-as-card layout (automatic in component)
- Desktop: semantic `<table>` with sticky row-label column
- Matrix slides may use tighter spacing (`space-y-4`) instead of `space-y-6` for viewport fit
- Row data lives in `src/components/toolMatrixRows.ts` — add section-specific rows there

## Content Density Rules

1. **Bullet Points**: Max 5 bullets per list, 1-2 lines each
2. **Paragraphs**: Max 3 short paragraphs per slide, 2-3 sentences each
3. **Cards/Sections**: Max 3 major vertical sections per slide
4. **Grid Items**: 2x2 grid maximum (4 items), title + 1-2 sentence description
5. **Text Sizes**: Headings `text-2xl font-bold`, body `text-lg`, captions `text-sm`

## List Formatting

**For proper multi-line list item indentation:**
```tsx
<ul className="space-y-2 text-gray-700">
  <li className="flex"><span className="mr-2">•</span><span>Text content that may wrap</span></li>
  <li className="flex"><span className="mr-2">•</span><span>This ensures wrapped lines align properly</span></li>
</ul>
```

This pattern prevents wrapped text from aligning under the bullet point. When text wraps to a new line, it properly aligns with the first line of text instead.

## Hyperlinks

**Always make URLs and repository references clickable:**
- Convert plain text URLs to `<a>` tags with proper attributes
- Format: `<a href="https://..." target="_blank" rel="noopener noreferrer" className="text-{color}-600 hover:underline">display text</a>`
- Use color-appropriate link styling (e.g., `text-purple-600` for purple-themed slides)
- GitHub repos: convert `owner/repo` to full GitHub URLs
- Always include `target="_blank"` and `rel="noopener noreferrer"` for external links
- **CRITICAL**: When sources, articles, or URLs are mentioned in content, ALWAYS add clickable links - do not forget this step!

## Source Citations

**Always cite sources for data, statistics, and research findings:**
- Include a source line at the bottom of data-driven slides
- Link to the original paper, article, or dataset
- Use the footer pattern in a muted background box:

```tsx
<div className="bg-gray-100 p-4 rounded-lg">
  <p className="text-sm italic text-gray-700">
    <strong>Source:</strong> <a href="https://arxiv.org/abs/..." target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">arXiv:XXXX.XXXXX</a> — "Paper Title" (Date)
  </p>
</div>
```

- For arXiv papers: link the arXiv ID (e.g., `arXiv:2505.09598`)
- For journals: link the DOI or article URL
- For websites/blogs: link directly to the source page
- Include publication date for time-sensitive data

## Common Mistakes to Avoid

❌ More than 3 major sections vertically stacked
❌ Long paragraphs or lists exceeding 5 items
❌ Inconsistent colors for topic
❌ Poor hierarchy (all text same size/weight)
❌ Missing `space-y-6` or `gap-4`
❌ Nested complexity (sub-bullets with sub-bullets)
❌ Plain text URLs or repository references without links
❌ Data or statistics without linked source citations
❌ Using `text-sm` or `text-xs` for body/list text — standard size is `text-gray-700` (unsized)
❌ Using `text-xl` or smaller for h3 headings — standard is `text-2xl font-bold`

✅ Clear focus, adequate spacing, visual variety, scannable content
## Responsive Design Guidelines

Tailwind CSS uses a mobile-first responsive design system. Apply these patterns to ensure slides display well across all screen sizes.

### Mobile-First Approach

Unprefixed utilities apply to all screen sizes; breakpoint prefixes apply from that breakpoint up:

```tsx
// Default breakpoints
sm: '640px',   // Small devices (landscape phones)
md: '768px',   // Medium devices (tablets)
lg: '1024px',  // Large devices (desktops)
xl: '1280px',  // Extra large devices
```

### Responsive Typography

Scale text appropriately across devices:

```tsx
// Headings
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
  Responsive Heading
</h1>

// Body text
<p className="text-sm sm:text-base md:text-lg leading-relaxed">
  Body text that scales
</p>
```

### Responsive Spacing

Adjust padding and margins for different screens:

```tsx
<div className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16">
  {/* Content with responsive padding */}
</div>

<section className="space-y-4 md:space-y-6 lg:space-y-8">
  {/* Responsive spacing between children */}
</section>
```

### Responsive Grid Layouts

Adapt grid columns to screen size:

```tsx
{/* 1 column mobile, 2 tablet, 3 desktop */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Responsive Flexbox Direction

```tsx
<div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
  <div className="w-full md:w-1/2">Column 1</div>
  <div className="w-full md:w-1/2">Column 2</div>
</div>
```

### Show/Hide Elements

Control visibility across breakpoints:

```tsx
{/* Mobile only */}
<div className="block md:hidden">Mobile content</div>

{/* Desktop only */}
<div className="hidden md:block">Desktop content</div>
```

### Responsive Anti-Patterns

❌ **Don't use excessive breakpoints:**
```tsx
// Bad
<div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">

// Good - strategic breakpoints only
<div className="text-sm md:text-base lg:text-lg">
```

❌ **Don't forget mobile-first:**
```tsx
// Bad - desktop-first
<div className="grid grid-cols-4 gap-2">

// Good - mobile-first
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
```

### Slide-Specific Responsive Patterns

**Title Slide:**
```tsx
<h1 className="text-5xl md:text-6xl font-bold">Section Name</h1>
<p className="text-xl md:text-2xl text-gray-600">Tagline</p>
```

**Content Cards:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
  {/* Cards stack on mobile, side-by-side on tablet+ */}
</div>
```

**Icon Sizes:**
```tsx
<IconName className="w-16 h-16 md:w-20 md:h-20" />
```
