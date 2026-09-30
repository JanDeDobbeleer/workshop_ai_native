import type { LucideIcon } from 'lucide-react';
import { Presentation, Sparkles, Target, Box, Code, Terminal, ShieldAlert, ScrollText, MessageSquare, Brain, Puzzle, Network, Plug, TrendingUp, Cpu, FileCode, Wrench, HeartHandshake, RefreshCw, Workflow, Factory } from 'lucide-react';
import type { SlideType } from '../sections';
import { introSlides, llmSlides, fluencySlides, modelsSlides, copilotCliSlides, securitySlides, instructionsSlides, promptingSlides, agentsSlides, harnessEngineeringSlides, habitatEngineeringSlides, contextSlides, evolutionSlides, multiagentSlides, loopEngineeringSlides, sdkSlides, mcpSlides, closingSlides, ollamaSlides, graphEngineeringSlides, softwareFactoriesSlides, speckitSlides } from '../sections';

export interface Section {
  name: string;
  slides: SlideType[];
  color: string;
  icon: LucideIcon;
}

export interface SectionMeta extends Section {
  startIndex: number;
  endIndex: number;
}

// Section definitions with metadata
export const sections: Section[] = [
  { name: 'Introduction', slides: introSlides, color: 'gray', icon: Presentation },
  { name: 'Evolution', slides: evolutionSlides, color: 'indigo', icon: TrendingUp },
  { name: 'LLM Basics', slides: llmSlides, color: 'blue', icon: Sparkles },
  { name: '4D Fluency', slides: fluencySlides, color: 'green', icon: Target },
  { name: 'Models', slides: modelsSlides, color: 'orange', icon: Box },
  { name: 'Prompting', slides: promptingSlides, color: 'indigo', icon: MessageSquare },
  { name: 'Instructions', slides: instructionsSlides, color: 'green', icon: ScrollText },
  { name: 'Agents & Skills', slides: agentsSlides, color: 'purple', icon: Puzzle },
  { name: 'Context', slides: contextSlides, color: 'purple', icon: Brain },
  { name: 'Spec Kit', slides: speckitSlides, color: 'teal', icon: FileCode },
  { name: 'Security', slides: securitySlides, color: 'red', icon: ShieldAlert },
  { name: 'MCP', slides: mcpSlides, color: 'teal', icon: Plug },
  { name: 'Harness Engineering', slides: harnessEngineeringSlides, color: 'amber', icon: Wrench },
  { name: 'Habitat Engineering', slides: habitatEngineeringSlides, color: 'rose', icon: HeartHandshake },
  { name: 'Terminal Agents', slides: copilotCliSlides, color: 'gray', icon: Terminal },
  { name: 'Multi-Agent', slides: multiagentSlides, color: 'purple', icon: Network },
  { name: 'Loop Engineering', slides: loopEngineeringSlides, color: 'cyan', icon: RefreshCw },
  { name: 'Graph Engineering', slides: graphEngineeringSlides, color: 'slate', icon: Workflow },
  { name: 'Closing', slides: closingSlides, color: 'gray', icon: Presentation },
  { name: '__addendum__', slides: [], color: 'gray', icon: Presentation },
  { name: 'Ollama', slides: ollamaSlides, color: 'blue', icon: Cpu },
  { name: 'Agent SDKs', slides: sdkSlides, color: 'indigo', icon: Code },
  { name: 'Software Factories', slides: softwareFactoriesSlides, color: 'slate', icon: Factory },
];

// Calculate section start indices
const getSectionStartIndices = (): SectionMeta[] => {
  let index = 0;
  return sections.map((section) => {
    const startIndex = index;
    index += section.slides.length;
    return { ...section, startIndex, endIndex: index - 1 };
  });
};

export const sectionData = getSectionStartIndices();

export const mainContentEndIndex =
  sectionData.find((s) => s.name === 'Closing')?.endIndex ??
  sectionData.reduce((acc, s) => acc + s.slides.length, 0) - 1;

// All slides combined; derived from `sections` so indices always line up with `sectionData`
export const slides: SlideType[] = sections.flatMap((section) => section.slides);

// Linear forward navigation is capped at the end of the Closing section, but once a
// reader is inside the addendum (reached via the menu) Next must advance within it.
export const nextIndex = (i: number): number =>
  i <= mainContentEndIndex
    ? Math.min(i + 1, mainContentEndIndex)
    : Math.min(i + 1, slides.length - 1);

export const canGoNext = (i: number): boolean =>
  i < mainContentEndIndex - 1 || (i > mainContentEndIndex && i < slides.length - 1);

export const findSectionForSlide = (index: number): SectionMeta | undefined =>
  sectionData.find((section) => index >= section.startIndex && index <= section.endIndex);
