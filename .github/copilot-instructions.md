# Copilot Instructions for AI Workshop Slides

## Project Overview

This is a React-based interactive slideshow for an **AI Native Developer Workshop**. Topics range from AI fundamentals to hands-on tool demos. The core framework presented is the **4D AI Fluency Framework** (Delegation, Description, Discernment, Diligence).

## Architecture

- **Single-component app**: All slides managed in React with TypeScript
- **Framework**: React with `useState` for navigation
- **Styling**: Tailwind CSS utility classes only (no external CSS)
- **Icons**: `lucide-react` for UI elements

## Repository Structure

- `.github/agents/` - Custom agents (e.g., Slide Content Creator)
- `src/sections/` - Slide section components
- `slides.tsx` - Legacy single-component slideshow (deprecated)

## Navigation Behavior

- Previous disabled on first slide, Next disabled on last
- Dot indicators: active = `bg-blue-600 w-8`, inactive = `bg-gray-300`
- Click any dot to jump directly

## Coding Standards

- Use TypeScript strict mode
- Follow React functional component patterns
- Use Tailwind CSS utility classes only
- Ensure responsive design principles
- Maintain accessibility standards (ARIA labels, semantic HTML)
