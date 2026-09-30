import React, { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react';
import type { Dispatch, ReactNode, SetStateAction } from 'react';
import { sections, sectionData, mainContentEndIndex, slides, findSectionForSlide, nextIndex } from '../slides/deck';
import type { Section, SectionMeta } from '../slides/deck';
import type { SlideType } from '../sections';
import { slideCatalog } from '../utils/slideCatalog';
import type { SlideCatalogEntry } from '../utils/slideCatalog';

const MAX_HISTORY = 50;

export interface NavigationContextType {
  currentSlide: number;
  currentSection: SectionMeta | undefined;
  setCurrentSlide: Dispatch<SetStateAction<number>>;
  /** Live index, safe to read from async code between renders */
  getCurrentSlide: () => number;
  /** Jump to a slide, remembering where we jumped from */
  gotoSlide: (index: number) => number;
  /** Jump to the first slide of a section; returns the target index or undefined when not found */
  gotoSection: (name: string) => number | undefined;
  /** Return to the slide the last jump started from; returns the target index or undefined */
  goBack: () => number | undefined;
  next: () => number;
  prev: () => number;
  canGoBack: boolean;
  sections: Section[];
  sectionData: SectionMeta[];
  mainContentEndIndex: number;
  slides: SlideType[];
  catalog: SlideCatalogEntry[];
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

// Read initial slide from query parameter (1-based)
const getInitialSlide = (): number => {
  const params = new URLSearchParams(window.location.search);
  const slideParam = params.get('slide');
  if (slideParam) {
    const slideNumber = parseInt(slideParam, 10);
    if (!isNaN(slideNumber) && slideNumber > 0) {
      return slideNumber - 1; // Convert to 0-based index
    }
  }
  return 0;
};

const clamp = (index: number): number => Math.min(Math.max(index, 0), slides.length - 1);

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentSlide, setCurrentSlideState] = useState(getInitialSlide);
  const [backStack, setBackStack] = useState<number[]>([]);
  const currentRef = useRef(currentSlide);
  const backStackRef = useRef<number[]>([]);

  const setCurrentSlide = useCallback<Dispatch<SetStateAction<number>>>((action) => {
    const nextIndex = typeof action === 'function' ? action(currentRef.current) : action;
    currentRef.current = nextIndex;
    setCurrentSlideState(nextIndex);
  }, []);

  const updateBackStack = useCallback((stack: number[]) => {
    backStackRef.current = stack;
    setBackStack(stack);
  }, []);

  const getCurrentSlide = useCallback(() => currentRef.current, []);

  const gotoSlide = useCallback((index: number) => {
    const target = clamp(index);
    if (target !== currentRef.current) {
      updateBackStack([...backStackRef.current, currentRef.current].slice(-MAX_HISTORY));
      setCurrentSlide(target);
    }
    return target;
  }, [setCurrentSlide, updateBackStack]);

  const gotoSection = useCallback((name: string) => {
    const wanted = name.trim().toLowerCase();
    const section = sectionData.find(
      (s) => s.name !== '__addendum__' && s.slides.length > 0 && s.name.toLowerCase() === wanted
    );
    return section ? gotoSlide(section.startIndex) : undefined;
  }, [gotoSlide]);

  const goBack = useCallback(() => {
    const stack = backStackRef.current;
    if (stack.length === 0) {
      return undefined;
    }
    const target = stack[stack.length - 1];
    updateBackStack(stack.slice(0, -1));
    setCurrentSlide(target);
    return target;
  }, [setCurrentSlide, updateBackStack]);

  const next = useCallback(() => {
    setCurrentSlide((prev) => nextIndex(prev));
    return currentRef.current;
  }, [setCurrentSlide]);

  const prev = useCallback(() => {
    setCurrentSlide((prevIndex) => Math.max(prevIndex - 1, 0));
    return currentRef.current;
  }, [setCurrentSlide]);

  const value = useMemo<NavigationContextType>(() => ({
    currentSlide,
    currentSection: findSectionForSlide(currentSlide),
    setCurrentSlide,
    getCurrentSlide,
    gotoSlide,
    gotoSection,
    goBack,
    next,
    prev,
    canGoBack: backStack.length > 0,
    sections,
    sectionData,
    mainContentEndIndex,
    slides,
    catalog: slideCatalog,
  }), [currentSlide, backStack, setCurrentSlide, getCurrentSlide, gotoSlide, gotoSection, goBack, next, prev]);

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = (): NavigationContextType => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
