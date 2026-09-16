import { SlideType } from './types';
import { useEffect } from 'react';

const FeedbackButton = () => {
  const navigateToFeedback = (e: React.MouseEvent) => {
    e.preventDefault();
    // Get total number of slides and navigate to the last one
    const params = new URLSearchParams(window.location.search);
    // Count all slides by checking the sections in the page
    // Since feedback is the last slide, we can use a large number or calculate dynamically
    const currentSlide = params.get('slide');
    const currentNum = currentSlide ? parseInt(currentSlide, 10) : 1;
    // Navigate to next slide (which is the feedback form)
    const feedbackSlide = currentNum + 1;
    window.location.href = `?slide=${feedbackSlide}`;
  };

  return (
    <a
      href="#feedback"
      onClick={navigateToFeedback}
      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      <span>Share Your Feedback</span>
    </a>
  );
};

const FeedbackEmbed = () => {
  useEffect(() => {
    // Load Tally embed script
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-screen">
      <iframe
        data-tally-src="https://tally.so/r/QK5JKg?transparentBackground=1"
        width="100%"
        height="100%"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="AI Native Developer Feedback"
        style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, border: 0 }}
      />
    </div>
  );
};

export const closingSlides: SlideType[] = [
  {
    title: "",
    subtitle: "",
    content: (
      <div className="flex flex-col items-center md:justify-center md:h-full space-y-4 md:space-y-8 px-4 md:px-0">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-2 md:mb-4">Thank You!</h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 md:mb-12">Questions & Discussion</p>
        </div>

        <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg border border-gray-200 w-full max-w-md md:max-w-none md:w-auto">
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">Jan De Dobbeleer</h3>
            <p className="text-base md:text-lg text-gray-600 mb-4">Engineering Leader & Open Source Innovator</p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-600">
              <span className="flex items-center space-x-2">
                <span>📧</span>
                <span>jan@itdepends.be</span>
              </span>
              <span className="flex items-center space-x-2">
                <span>🐦</span>
                <span>@jandedobbeleer</span>
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="https://github.com/JanDeDobbeleer/workshop_ai_native"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg shadow hover:bg-gray-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            <span>View Source on GitHub</span>
          </a>

          <FeedbackButton />
        </div>

        <div className="mt-8 text-center">
          <p className="text-base md:text-lg text-gray-600 italic">
            "The best way to predict the future is to create it."
          </p>
          <p className="text-sm md:text-base text-gray-500 mt-2">
            (Peter Drucker)
          </p>
        </div>
      </div>
    )
  },
  {
    title: "",
    subtitle: "",
    content: <FeedbackEmbed />
  }
];
