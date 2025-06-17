import React, { useState, useEffect, useRef } from 'react';

// Use the same CSS as before
// ... in your index.css file ...
// html { scroll-behavior: smooth; }
// main { height: 100vh; overflow-y: scroll; scroll-snap-type: y mandatory; }
// div[id^="section"] { ... }


function Test() {
  const [activeSection, setActiveSection] = useState('section1');
  const mainRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  
  // Ref to store the initial touch position for mobile scrolling
  const touchStartY = useRef(0);

  const goToNextSection = () => {
    section3Ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // IntersectionObserver setup (no changes needed here)
  useEffect(() => {
    const sections = [section1Ref, section2Ref, section3Ref];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: mainRef.current,
        threshold: 0.7,
      }
    );
    sections.forEach(section => section.current && observer.observe(section.current));
    return () => {
      sections.forEach(section => section.current && observer.unobserve(section.current));
    };
  }, []);

  // --- NEW ROBUST SCROLL BLOCKING LOGIC ---
  useEffect(() => {
    const mainContainer = mainRef.current;
    if (!mainContainer) return;

    const isBlockingActive = activeSection === 'section2';

    // Temporarily disable scroll-snap when on section2
    // This makes event cancellation much more reliable
    mainContainer.style.scrollSnapType = isBlockingActive ? 'none' : 'y mandatory';

    // --- Event Handlers ---
    const preventDownwardScroll = (e) => {
      // For wheel events, positive deltaY means scrolling down
      if (e.deltaY > 0) e.preventDefault();
    };

    const preventKeyboardScroll = (e) => {
      // For keyboard, block spacebar, pagedown, and arrowdown
      if ([' ', 'PageDown', 'ArrowDown'].includes(e.key)) {
        e.preventDefault();
      }
    };
    
    const handleTouchStart = (e) => {
        // Store the starting Y position of the touch
        touchStartY.current = e.touches[0].clientY;
    }

    const preventTouchScroll = (e) => {
        // Get the current Y position of the touch
        const currentY = e.touches[0].clientY;
        // If the current position is less than the start (swiping up, content moves down)
        if (currentY < touchStartY.current) {
            e.preventDefault();
        }
    };

    // Add or remove listeners based on whether blocking is active
    if (isBlockingActive) {
      mainContainer.addEventListener('wheel', preventDownwardScroll, { passive: false });
      window.addEventListener('keydown', preventKeyboardScroll);
      mainContainer.addEventListener('touchstart', handleTouchStart, { passive: false });
      mainContainer.addEventListener('touchmove', preventTouchScroll, { passive: false });
    }

    // Cleanup function to remove all listeners
    return () => {
      mainContainer.removeEventListener('wheel', preventDownwardScroll);
      window.removeEventListener('keydown', preventKeyboardScroll);
      mainContainer.removeEventListener('touchstart', handleTouchStart);
      mainContainer.removeEventListener('touchmove', preventTouchScroll);
    };
  }, [activeSection]); // This effect re-runs every time the active section changes

  return (
    <main ref={mainRef}>
      <div id="section1" ref={section1Ref} className="h-screen bg-orange-200">
        <p>Section 1</p>
        <p className="text-sm mt-2">Scroll down to continue</p>
      </div>
      <div id="section2" ref={section2Ref} className="h-screen bg-green-200">
        <p>Section 2</p>
        <p className="text-sm mt-2">Scrolling down is disabled.</p>
        <button
          onClick={goToNextSection}
          className="mt-4 px-6 py-2 bg-black text-white rounded-lg shadow-md hover:bg-gray-800 transition absolute bottom-4 right-4"
        >
          Next
        </button>
      </div>
      <div id="section3" ref={section3Ref} className="bg-indigo-200">
        <p>Section 3</p>
      </div>
    </main>
  );
}

export default Test;