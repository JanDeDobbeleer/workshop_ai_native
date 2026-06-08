import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  introSlides,
  evolutionSlides,
  llmSlides,
  fluencySlides,
  modelsSlides,
  copilotSlides,
  promptingSlides,
  instructionsSlides,
  agentsSlides,
  contextSlides,
  speckitSlides,
  securitySlides,
  mcpSlides,
  spacesSlides,
  copilotCliSlides,
  multiagentSlides,
  closingSlides,
  ollamaSlides,
  sdkSlides,
} from './sections';
import { SlideType } from './sections/types';
import './index.css';

const slides: SlideType[] = [
  ...introSlides,
  ...evolutionSlides,
  ...llmSlides,
  ...fluencySlides,
  ...modelsSlides,
  ...copilotSlides,
  ...promptingSlides,
  ...instructionsSlides,
  ...agentsSlides,
  ...contextSlides,
  ...speckitSlides,
  ...securitySlides,
  ...mcpSlides,
  ...spacesSlides,
  ...copilotCliSlides,
  ...multiagentSlides,
  ...closingSlides,
  ...ollamaSlides,
  ...sdkSlides,
];

const ExportDeck: React.FC = () => (
  <>
    {slides.map((slide, index) => (
      <div
        key={index}
        className="slide w-full bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col overflow-hidden p-8"
        style={{ width: '1920px', height: '1080px' }}
      >
        {(slide.title || slide.subtitle) && (
          <div className="mb-6 text-center flex-shrink-0">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">{slide.title}</h1>
            <p className="text-xl text-gray-600">{slide.subtitle}</p>
          </div>
        )}
        <div
          className={`flex-1 min-h-0 flex items-center justify-center ${
            !slide.title && !slide.subtitle ? 'items-center justify-center' : ''
          }`}
        >
          <div
            className={`w-full h-full overflow-hidden ${
              !slide.title && !slide.subtitle ? 'flex items-center justify-center' : ''
            }`}
          >
            {slide.content}
          </div>
        </div>
      </div>
    ))}
  </>
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ExportDeck />
  </React.StrictMode>,
);
