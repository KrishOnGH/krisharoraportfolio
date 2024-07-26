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
  const containerRef = useRef(null);
  const timelineRef = useRef(null);

  const textColor = isDarkMode ? 'text-white' : 'text-black';
  const borderColor = isDarkMode ? "border-[#636363]" : "border-gray-300";
  const glowColor = isDarkMode ? "drop-shadow-[0_0_2px_rgba(255,255,255,0.7)]" : "drop-shadow-[0_0_2px_rgba(255,255,255,0.7)]";

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current && timelineRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const scrollPosition = window.scrollY;
        const containerTop = containerRect.top + scrollPosition;
        const containerBottom = containerRect.bottom + scrollPosition;
        
        const timelineHeight = timelineRef.current.offsetHeight;
        const viewportHeight = window.innerHeight;
        
        let newTop;
        
        if (scrollPosition < containerTop) {
          // Above the container
          newTop = containerTop;
        } else if (scrollPosition + viewportHeight > containerBottom) {
          // Below the container
          newTop = containerBottom - timelineHeight;
        } else {
          // Within the container
          newTop = scrollPosition;
        }
        
        timelineRef.current.style.top = `${newTop - containerTop + 80}px`;
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
        className="absolute left-1/2 -translate-x-1/2 w-3/4"
        style={{ top: '150px' }}
      >
        <div className={`h-0.5 ${borderColor} w-full absolute top-1.5`}></div>
        {timelineEvents.map((event, index) => (
          <div
            key={index}
            className={`absolute w-3 h-3 rounded-full cursor-pointer ${
              index === activeIndex ? 'bg-blue-500' : isDarkMode ? 'bg-gray-600' : 'bg-gray-400'
            }`}
            style={{ 
              left: `calc(${(index / (timelineEvents.length - 1)) * 100}% - 6px)`,
              top: '0'
            }}
            onClick={() => setActiveIndex(index)}
          >
            <span className={`absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm ${textColor}`}>
              {event}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}