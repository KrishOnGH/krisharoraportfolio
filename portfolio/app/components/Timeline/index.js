import React, { useState, useEffect, useRef } from 'react';

const timelineEvents = [
  "First Event",
  "Second Event",
  "Third Event",
  "Fourth Event",
  "Fifth Event"
];

export default function Timeline({ colorMode }) {
  const isDarkMode = colorMode === 'dark';
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const containerRef = useRef(null);
  const timelineRef = useRef(null);

  const textColor = isDarkMode ? 'text-white' : 'text-black';
  const borderColor = isDarkMode ? "border-[#636363]" : "border-gray-300";
  const glowColor = isDarkMode ? "drop-shadow-[0_0_2px_rgba(255,255,255,0.7)]" : "drop-shadow-[0_0_2px_rgba(255,255,255,0.7)]";

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current && timelineRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const timelineRect = timelineRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (containerRect.top <= 0 && containerRect.bottom >= windowHeight) {
          setIsSticky(true);
          timelineRef.current.style.position = 'fixed';
          timelineRef.current.style.top = '50%';
          timelineRef.current.style.transform = 'translateY(-50%)';
        } else {
          setIsSticky(false);
          timelineRef.current.style.position = 'absolute';
          timelineRef.current.style.top = '50%';
          timelineRef.current.style.transform = 'translateY(-50%)';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className={`relative ${textColor} w-full h-[200vh] overflow-hidden`}>
      <div 
        ref={timelineRef}
        className={`left-8 w-0.5 ${borderColor} h-3/4 ${isSticky ? 'fixed' : 'absolute'}`}
      >
        {timelineEvents.map((event, index) => (
          <div
            key={index}
            className={`absolute w-3 h-3 rounded-full -left-1.5 cursor-pointer ${
              index === activeIndex ? 'bg-blue-500' : isDarkMode ? 'bg-gray-600' : 'bg-gray-400'
            }`}
            style={{ top: `calc(${(index / (timelineEvents.length - 1)) * 100}vh - 6px)` }}
            onClick={() => setActiveIndex(index)}
          >
            <span className={`absolute left-8 -top-2 whitespace-nowrap text-sm ${textColor}`}>
              {event}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}