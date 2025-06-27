import { useRef, useEffect, useState } from "react";
// Imports are using a CDN to ensure they work in this environment.
import { gsap } from "https://cdn.skypack.dev/gsap";
import { ScrollToPlugin } from "https://cdn.skypack.dev/gsap/ScrollToPlugin";
import SyncedLyricsPlayer from "./AudioReader";

// Register the plugin with GSAP - this is crucial!
gsap.registerPlugin(ScrollToPlugin);

const ChapterContainer = () => {
    // Refs for DOM elements
    const containerRef = useRef(null);
    const sectionRefs = useRef([]);
    const textContainerRef = useRef(null);

    // --- State Management ---
    // Tracks the main section index (0 for Section 1, 1 for Section 2, etc.)
    const [activeIndex, setActiveIndex] = useState(0);

    // Manages the animation sequence within Section 2
    const [section2State, setSection2State] = useState('start');

    // Ref to prevent new animations while one is running
    const isAnimating = useRef(false);

    // --- Refs to hold current state for the event listener ---
    // FIX: Using refs to avoid "stale" state within the event handler.
    // The event listener is only added once, so it needs a way to access the latest state.
    const activeIndexRef = useRef(activeIndex);
    const section2StateRef = useRef(section2State);

    // --- Effect for Initial Setup (runs only once) ---
    useEffect(() => {
        sectionRefs.current = gsap.utils.toArray(".chapter-section");
        if (textContainerRef.current) {
            gsap.set(textContainerRef.current, { autoAlpha: 0, y: 20 });
        }
    }, []);

    // --- Effect to keep refs in sync with state ---
    // This runs whenever state changes, ensuring our refs are always up-to-date.
    useEffect(() => {
        activeIndexRef.current = activeIndex;
        section2StateRef.current = section2State;
    }, [activeIndex, section2State]);


    // --- Main Effect for Handling Scroll Logic ---
    // FIX: This effect now runs only ONCE on mount, setting up and cleaning up the event listener correctly.
    useEffect(() => {
        const goToSection = (index) => {
            if (isAnimating.current) return;
            isAnimating.current = true;

            console.log(`Animating to Section ${index + 1}`);

            gsap.to(window, {
                scrollTo: { y: sectionRefs.current[index], autoKill: false },
                duration: 1.2,
                ease: "power3.inOut",
                onComplete: () => {
                    setActiveIndex(index);
                    if (index === 1) {
                        setSection2State('start');
                    }
                    isAnimating.current = false;
                }
            });
        };

        const handleWheel = (event) => {
            if (isAnimating.current) return;

            const isScrollingDown = event.deltaY > 0;

            // By reading from refs, we always get the LATEST state values.
            const currentActiveIndex = activeIndexRef.current;
            const currentSection2State = section2StateRef.current;

            // --- LOGIC FOR SECTION 2 ---
            if (currentActiveIndex === 1) {
                if (isScrollingDown) {
                    if (currentSection2State === 'start') {
                        isAnimating.current = true;
                        console.log("Section 2: Showing text.");
                        gsap.to(textContainerRef.current, {
                            autoAlpha: 1, y: 0, duration: 0.8, ease: "power2.out",
                            onComplete: () => {
                                setSection2State('text-visible');
                                isAnimating.current = false;
                            }
                        });
                    } else if (currentSection2State === 'text-visible') {
                        goToSection(currentActiveIndex + 1);
                    }
                } else { // Scrolling UP
                    if (currentSection2State === 'text-visible') {
                        isAnimating.current = true;
                        console.log("Section 2: Hiding text.");
                        gsap.to(textContainerRef.current, {
                            autoAlpha: 0, y: 20, duration: 0.8, ease: "power2.in",
                            onComplete: () => {
                                setSection2State('start');
                                isAnimating.current = false;
                            }
                        });
                    } else if (currentSection2State === 'start') {
                        goToSection(currentActiveIndex - 1);
                    }
                }
            }
            // --- LOGIC FOR ALL OTHER SECTIONS ---
            else {
                let nextIndex = currentActiveIndex;
                if (isScrollingDown) {
                    if (currentActiveIndex < sectionRefs.current.length - 1) {
                        nextIndex = currentActiveIndex + 1;
                    }
                } else {
                    if (currentActiveIndex > 0) {
                        nextIndex = currentActiveIndex - 1;
                    }
                }

                if (nextIndex !== currentActiveIndex) {
                    goToSection(nextIndex);
                }
            }
        };

        window.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, []); // Empty dependency array ensures this runs only once.

    function goToSection(index) {

        window.scrollTo({
            top: sectionRefs.current[index].offsetTop,
            behavior: 'smooth'
        });


        console.log(`Animating to Section ${index}`);
    }

    return (
        <div ref={containerRef} className="bg-gray-800 text-white">
            <div className="chapter-section w-full h-screen bg-red-400 flex items-center justify-center text-5xl font-bold">
                <div>
                    <h1 className="text-5xl font-bold mb-6">Section 1</h1>
                    <SyncedLyricsPlayer audioSrc={"https://storage.googleapis.com/cmw-geoje-src/audios/Temoignnage%201_07-5_14.mp3"} />
                </div>
            </div>
            <div className="chapter-section w-full h-screen bg-orange-400 flex items-center justify-center text-center">
                <div className="max-w-3xl p-8">
                    <h1 className="text-5xl font-bold mb-6">Section 2</h1>
                    <div ref={textContainerRef} className="font-regular text-lg">
                        <p>This text appears on scroll. Scroll down again to continue to Section 3, or scroll up to hide this text. Scroll up again to return to Section 1.</p>
                        <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit viverra elit, et auctor magna commodo in. Morbi ac mollis leo. Fusce lobortis dignissim quam eget pharetra.</p>
                        <button onClick={() => goToSection(3)} className="mt-4 bg-blue-200 cursor-pointer">Click</button>
                    </div>
                </div>
            </div>

            <div className="chapter-section w-full h-screen bg-green-400 flex items-center justify-center text-5xl font-bold">Section 3</div>
            <div className="chapter-section w-full h-screen bg-blue-400 flex items-center justify-center text-5xl font-bold">Section 4</div>
        </div>
    );
};

export default ChapterContainer;