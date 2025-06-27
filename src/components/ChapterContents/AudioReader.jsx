import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { AudioBtn } from '../Button';

const SyncedLyricsPlayer = ({ audioSrc = "" }) => {
    // Use the "interview_Oh" namespace defined in your i18next config
    const { t, i18n } = useTranslation("interview_Oh");

    const [timingData, setTimingData] = useState([]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [currentLineIndex, setCurrentLineIndex] = useState(-1);

    const audioRef = useRef(null);
    const scriptContainerRef = useRef(null);

    // Load the timing data from the public folder
    useEffect(() => {
        fetch('/assets/audio/interview_Oh.json')
            .then(response => response.json())
            .then(data => setTimingData(data))
            .catch(error => console.error("Error loading timing data:", error));
    }, []);

    // useMemo now correctly combines the fetched timing data with i18next translations
    const lyrics = useMemo(() => {
        if (!timingData) return [];
        return timingData.map(line => ({
            time: line.time,
            text: t(line.key) // This now works correctly!
        }));
    }, [i18n.language, t, timingData]);

    // Effect to sync the current lyric line
    useEffect(() => {
        const newIndex = lyrics.findIndex((line, index) => {
            const nextLine = lyrics[index + 1];
            return currentTime >= line.time && (!nextLine || currentTime < nextLine.time);
        });

        if (newIndex !== currentLineIndex) {
            setCurrentLineIndex(newIndex);
        }
    }, [currentTime, lyrics, currentLineIndex]);

    // Effect to control audio playback when isPlaying state changes
    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    // Effect to handle automatic scrolling
    useEffect(() => {
        // valid index and container ref
        if (currentLineIndex < 0 || !scriptContainerRef.current) {
            return;
        }

        // find the p tag for the active line
        const activeLineElement = scriptContainerRef.current.children[currentLineIndex];

        // If the element exists, scroll to it
        if (activeLineElement) {
            activeLineElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
            })
        }
    }, [currentLineIndex])

    // The single handler for toggling play/pause
    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    // Also update isPlaying state if user uses the native controls
    const handlePlay = () => {
        setIsPlaying(true);
        console.log("isPlaying turns true")
    }
    const handlePause = () => setIsPlaying(false);

    return (
        <div className="flex flex-col items-center gap-10">
            <audio
                ref={audioRef}
                src={audioSrc}
                onTimeUpdate={handleTimeUpdate}
                onPlay={handlePlay}
                onPause={handlePause}
                className="hidden"
            />
            <AudioBtn
                isPlaying={isPlaying}
                onTogglePlay={togglePlayPause}
                textColor="white"
                bgColor="transparent"
            />
            <div id="script-container" ref={scriptContainerRef} className="h-1/2 overflow-hidden flex flex-col gap-2">
                {/* {lyrics[currentLineIndex]?.text
                    || */}
                {lyrics.slice(Math.max(0, currentLineIndex - 2), currentLineIndex + 3).map((line, index) => {
                    // We need to calculate the original index to correctly set the active class
                    const originalIndex = Math.max(0, currentLineIndex - 2) + index;
                    return (
                        <p
                            key={line.time}
                            className={originalIndex === currentLineIndex ? 'text-white' : 'text-white/20'}
                        >
                            {line.text}
                        </p>
                    );
                })}
            </div>
        </div>
    );
};

export default SyncedLyricsPlayer;