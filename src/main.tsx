import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { ChevronLeft, ChevronRight, Menu, X, Presentation, Sparkles, Target, Box, Code, Terminal, Shield, ShieldAlert, ScrollText, MessageSquare, Brain, Puzzle, Network, PanelRight, PanelLeft, Plug, TrendingUp, Cpu, FileCode, Users, Trophy } from 'lucide-react';
import { introSlides, llmSlides, fluencySlides, modelsSlides, copilotSlides, copilotCliSlides, privacySlides, securitySlides, instructionsSlides, promptingSlides, skillsSlides, spacesSlides, contextSlides, evolutionSlides, multiagentSlides, sdkSlides, mcpSlides, closingSlides, ollamaSlides, speckitSlides, prosSlides } from './sections';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import './index.css';

// Workshop password hash (SHA-256)
// To generate a new hash, run in browser console:
//   crypto.subtle.digest('SHA-256', new TextEncoder().encode('your-password'))
//     .then(buf => Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join(''))
//     .then(console.log)
// Local dev hash is for 'workshop', production uses VITE_WORKSHOP_PASSWORD_HASH env var
// This is not actual security, just a simple gate to prevent casual access
const WORKSHOP_PASSWORD_HASH = import.meta.env.VITE_WORKSHOP_PASSWORD_HASH ||
  'ee510d1a07ac7e6491ea191cd1918ea553ed2a358c8a0a04c1b90bd89222c314'; // hash of 'workshop'

// Section definitions with metadata
const sections = [
  { name: 'Introduction', slides: introSlides, color: 'gray', icon: Presentation },
  { name: 'Evolution', slides: evolutionSlides, color: 'indigo', icon: TrendingUp },
  { name: 'LLM Basics', slides: llmSlides, color: 'blue', icon: Sparkles },
  { name: '4D Fluency', slides: fluencySlides, color: 'green', icon: Target },
  { name: 'Models', slides: modelsSlides, color: 'orange', icon: Box },
  { name: 'Ollama', slides: ollamaSlides, color: 'blue', icon: Cpu },
  { name: 'Copilot', slides: copilotSlides, color: 'blue', icon: Code },
  { name: 'Prompting', slides: promptingSlides, color: 'indigo', icon: MessageSquare },
  { name: 'Instructions', slides: instructionsSlides, color: 'green', icon: ScrollText },
  { name: 'Context', slides: contextSlides, color: 'purple', icon: Brain },
  { name: 'Reuse & Skills', slides: skillsSlides, color: 'purple', icon: Puzzle },
  { name: 'Spec Kit', slides: speckitSlides, color: 'teal', icon: FileCode },
  { name: 'Privacy', slides: privacySlides, color: 'purple', icon: Shield },
  { name: 'Security', slides: securitySlides, color: 'red', icon: ShieldAlert },
  { name: 'MCP', slides: mcpSlides, color: 'teal', icon: Plug },
  { name: 'Team Sharing', slides: spacesSlides, color: 'blue', icon: Users },
  { name: 'Copilot CLI', slides: copilotCliSlides, color: 'gray', icon: Terminal },
  { name: 'Multi-Agent', slides: multiagentSlides, color: 'purple', icon: Network },
  { name: 'Copilot SDK', slides: sdkSlides, color: 'indigo', icon: Code },
  { name: 'What the Pros Use', slides: prosSlides, color: 'orange', icon: Trophy },
  { name: 'Closing', slides: closingSlides, color: 'gray', icon: Presentation },
];

// Calculate section start indices
const getSectionStartIndices = () => {
  let index = 0;
  return sections.map((section) => {
    const startIndex = index;
    index += section.slides.length;
    return { ...section, startIndex, endIndex: index - 1 };
  });
};

const sectionData = getSectionStartIndices();

const FourDSlides = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navOnLeft, setNavOnLeft] = useState(() => {
    // Read preference from localStorage, default to false (right-handed)
    const stored = localStorage.getItem('navOnLeft');
    return stored === 'true';
  });
  const [currentSlide, setCurrentSlide] = useState(() => {
    // Read initial slide from query parameter (1-based)
    const params = new URLSearchParams(window.location.search);
    const slideParam = params.get('slide');
    if (slideParam) {
      const slideNumber = parseInt(slideParam, 10);
      if (!isNaN(slideNumber) && slideNumber > 0) {
        return slideNumber - 1; // Convert to 0-based index
      }
    }
    return 0;
  });

  // Combine all slide sections
  const slides = [
    ...introSlides,
    ...evolutionSlides,
    ...llmSlides,
    ...fluencySlides,
    ...modelsSlides,
    ...ollamaSlides,
    ...copilotSlides,
    ...promptingSlides,
    ...instructionsSlides,
    ...contextSlides,
    ...skillsSlides,
    ...speckitSlides,
    ...privacySlides,
    ...securitySlides,
    ...mcpSlides,
    ...spacesSlides,
    ...copilotCliSlides,
    ...multiagentSlides,
    ...sdkSlides,
    ...prosSlides,
    ...closingSlides,
  ];

  // Get current section based on slide index
  const getCurrentSection = () => {
    return sectionData.find(
      (section) => currentSlide >= section.startIndex && currentSlide <= section.endIndex
    );
  };

  const jumpToSection = (startIndex: number) => {
    setCurrentSlide(startIndex);
    setMenuOpen(false);
  };

  // Update URL when slide changes
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set('slide', String(currentSlide + 1)); // Convert to 1-based for URL
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, '', newUrl);
  }, [currentSlide]);

  // Persist nav position preference
  useEffect(() => {
    localStorage.setItem('navOnLeft', String(navOnLeft));
  }, [navOnLeft]);

  const toggleNavPosition = () => {
    setNavOnLeft((prev) => !prev);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Validate and clamp currentSlide to valid range
  useEffect(() => {
    if (currentSlide >= slides.length) {
      setCurrentSlide(slides.length - 1);
    } else if (currentSlide < 0) {
      setCurrentSlide(0);
    }
  }, [currentSlide, slides.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      } else if (e.key === 'ArrowRight' && !menuOpen) {
        setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
      } else if (e.key === 'ArrowLeft' && !menuOpen) {
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slides.length, menuOpen]);

  // Touch/swipe handling for mobile navigation
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;
    const minSwipeDistance = 50;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (menuOpen) return;
      touchEndX = e.changedTouches[0].screenX;
      const swipeDistance = touchEndX - touchStartX;

      if (Math.abs(swipeDistance) > minSwipeDistance) {
        if (swipeDistance > 0) {
          // Swiped right - go to previous slide
          setCurrentSlide((prev) => Math.max(prev - 1, 0));
        } else {
          // Swiped left - go to next slide
          setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [slides.length, menuOpen]);

  // Prevent wheel/scroll from triggering slide navigation
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Don't prevent scroll within the content area
      // Only allow scrolling, not slide navigation
      e.stopPropagation();
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className="min-w-full w-full min-h-screen h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col overflow-x-hidden">
      {/* Menu Button - Desktop: top left, Mobile: edge tab (position based on navOnLeft) */}
      <button
        onClick={() => setMenuOpen(true)}
        className={`fixed z-40 transition-all md:top-4 md:left-4 md:p-2 md:rounded-lg bottom-32 md:bottom-auto md:translate-y-0 md:right-auto bg-white/90 shadow-md hover:bg-gray-50 py-4 px-1 md:px-2 md:py-2 md:rounded-lg ${
          navOnLeft ? 'left-0 rounded-r-lg rounded-l-none' : 'right-0 rounded-l-lg rounded-r-none'
        } md:rounded-lg`}
        aria-label="Open section menu"
      >
        {navOnLeft ? (
          <PanelLeft className="w-4 h-4 text-gray-600 md:hidden" />
        ) : (
          <PanelRight className="w-4 h-4 text-gray-600 md:hidden" />
        )}
        <Menu className="w-5 h-5 text-gray-700 hidden md:block" />
      </button>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 transition-opacity"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Slide-out Menu - Desktop: from left, Mobile: based on navOnLeft preference */}
      <div
        className={`fixed top-0 h-full w-72 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col md:left-0 md:right-auto ${
          navOnLeft
            ? `left-0 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`
            : `right-0 md:left-0 ${menuOpen ? 'translate-x-0' : 'translate-x-full md:-translate-x-full'}`
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Sections</h2>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-1 rounded hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        <nav className="overflow-y-auto flex-1">
          <ul className="py-2">
            {sectionData.map((section, index) => {
              const isActive = getCurrentSection()?.name === section.name;
              const colorClasses: Record<string, string> = {
                gray: 'bg-gray-100 border-gray-500 text-gray-900',
                blue: 'bg-blue-50 border-blue-500 text-blue-900',
                green: 'bg-green-50 border-green-500 text-green-900',
                purple: 'bg-purple-50 border-purple-500 text-purple-900',
                orange: 'bg-orange-50 border-orange-500 text-orange-900',
                indigo: 'bg-indigo-50 border-indigo-500 text-indigo-900',
                teal: 'bg-teal-50 border-teal-500 text-teal-900',
                red: 'bg-red-50 border-red-500 text-red-900',
              };
              const iconColorClasses: Record<string, string> = {
                gray: 'text-gray-600',
                blue: 'text-blue-600',
                green: 'text-green-600',
                purple: 'text-purple-600',
                orange: 'text-orange-600',
                indigo: 'text-indigo-600',
                teal: 'text-teal-600',
                red: 'text-red-600',
              };
              const activeClass = isActive
                ? `${colorClasses[section.color]} border-l-4`
                : 'hover:bg-gray-50 border-l-4 border-transparent';
              const IconComponent = section.icon;
              return (
                <li key={index}>
                  <a
                    href={`?slide=${section.startIndex + 1}`}
                    onClick={(e) => {
                      e.preventDefault();
                      jumpToSection(section.startIndex);
                    }}
                    className={`block w-full text-left px-4 py-3 transition-colors ${activeClass}`}
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent className={`w-5 h-5 ${iconColorClasses[section.color]}`} />
                      <div>
                        <span className="font-medium">{section.name}</span>
                        <span className="text-xs text-gray-500 ml-2">
                          ({section.slides.length} slides)
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        {/* Nav position toggle - mobile only, at bottom for one-handed access */}
        <button
          onClick={toggleNavPosition}
          className="md:hidden flex items-center gap-2 w-full px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 border-t border-gray-200 transition-colors"
          aria-label={navOnLeft ? 'Move navigation to right' : 'Move navigation to left'}
        >
          {navOnLeft ? (
            <>
              <PanelRight className="w-4 h-4" />
              <span>Move nav to right</span>
            </>
          ) : (
            <>
              <PanelLeft className="w-4 h-4" />
              <span>Move nav to left</span>
            </>
          )}
        </button>
      </div>

      <div className="flex-1 flex flex-col p-4 pt-8 md:p-8 min-w-0 min-h-0">
        {(slides[currentSlide].title || slides[currentSlide].subtitle) && (
          <div className="mb-4 md:mb-6 text-center flex-shrink-0">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-1 md:mb-2">
              {slides[currentSlide].title}
            </h1>
            <p className="text-base md:text-xl text-gray-600">
              {slides[currentSlide].subtitle}
            </p>
          </div>
        )}

        <div className="flex-1 min-h-0 md:flex md:items-center md:justify-center">
          <div className={`w-full h-full overflow-auto md:h-auto md:max-h-full ${!slides[currentSlide].title && !slides[currentSlide].subtitle ? 'flex items-center justify-center' : ''}`}>
            {slides[currentSlide].content}
          </div>
        </div>

        <div className="mt-4 md:mt-6 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0 px-2 md:px-4 flex-shrink-0">
          <div className="grid grid-cols-3 items-center w-full md:w-auto md:flex md:flex-1">
            <div className="flex justify-start">
              {currentSlide > 0 && currentSlide < slides.length - 1 && (
                <button
                  onClick={prevSlide}
                  className="flex items-center space-x-1 md:space-x-2 px-3 py-1.5 md:px-4 md:py-2 bg-white rounded-lg shadow hover:bg-gray-50 transition-all text-sm md:text-base"
                >
                  <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="hidden sm:inline">Previous</span>
                </button>
              )}
            </div>

            <div className="text-xs md:text-sm text-gray-500 text-center md:hidden">
            </div>

            <div className="flex justify-end">
              {currentSlide < slides.length - 2 && (
                <button
                  onClick={nextSlide}
                  className="flex items-center space-x-1 md:space-x-2 px-3 py-1.5 md:px-4 md:py-2 bg-white rounded-lg shadow hover:bg-gray-50 transition-all text-sm md:text-base md:hidden"
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              )}
            </div>
          </div>

          <div className="hidden md:block text-sm text-gray-500">
          </div>

          <div className="hidden md:flex md:flex-1 md:justify-end">
            {currentSlide < slides.length - 2 && (
              <button
                onClick={nextSlide}
                className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg shadow hover:bg-gray-50 transition-all"
              >
                <span>Next</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Logout helper component - provides window.lockWorkshop() for testing
const LogoutHelper: React.FC = () => {
  const { logout } = useAuth();

  useEffect(() => {
    (window as any).lockWorkshop = logout;
    return () => {
      delete (window as any).lockWorkshop;
    };
  }, [logout]);

  return null;
};

// Main App component with route guard authentication
const App = () => {
  return (
    <AuthProvider passwordHash={WORKSHOP_PASSWORD_HASH}>
      <LogoutHelper />
      <ProtectedRoute passwordHash={WORKSHOP_PASSWORD_HASH}>
        <FourDSlides />
      </ProtectedRoute>
    </AuthProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
