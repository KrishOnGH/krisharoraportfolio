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
  const timelineRef = useRef(null);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      if (scrollTimeout.current) return;

      const timelineRect = timelineRef.current.getBoundingClientRect();
      const timelineTop = timelineRect.top;
      const timelineBottom = timelineRect.bottom;

      if (timelineTop <= 0 && timelineBottom >= window.innerHeight) {
        e.preventDefault();

        scrollTimeout.current = setTimeout(() => {
          scrollTimeout.current = null;
        }, 500);

        if (e.deltaY > 0 && activeIndex < timelineEvents.length - 1) {
          setActiveIndex(prevIndex => prevIndex + 1);
        } else if (e.deltaY < 0 && activeIndex > 0) {
          setActiveIndex(prevIndex => prevIndex - 1);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [activeIndex]);

  useEffect(() => {
    if (timelineRef.current) {
      const timelineRect = timelineRef.current.getBoundingClientRect();
      const timelineTop = timelineRect.top;
      const timelineBottom = timelineRect.bottom;

      if (timelineTop <= 0 && timelineBottom >= window.innerHeight) {
        window.scrollTo({
          top: activeIndex * window.innerHeight,
          behavior: 'smooth'
        });
      }
    }
  }, [activeIndex]);

  const bgColor = isDarkMode ? 'bg-gray-900' : 'bg-white';
  const textColor = isDarkMode ? 'text-white' : 'text-black';
  const borderColor = isDarkMode ? 'border-gray-700' : 'border-gray-300';

  return (
    <div ref={timelineRef} className={`relative ${bgColor} ${textColor} min-h-screen`}>
      <div className={`fixed left-8 top-1/2 transform -translate-y-1/2 w-0.5 ${borderColor} h-3/4`}>
        {timelineEvents.map((event, index) => (
          <div
            key={index}
            className={`absolute w-3 h-3 rounded-full -left-1.5 cursor-pointer ${
              index === activeIndex ? 'bg-blue-500' : isDarkMode ? 'bg-gray-600' : 'bg-gray-400'
            }`}
            style={{ top: `${(index / (timelineEvents.length - 1)) * 100}%` }}
            onClick={() => setActiveIndex(index)}
          >
            <span className={`absolute left-8 -top-2 whitespace-nowrap text-sm ${textColor}`}>
              {event}
            </span>
          </div>
        ))}
      </div>
      
      {timelineEvents.map((event, index) => (
        <div
          key={index}
          className={`h-screen w-screen flex items-center justify-center px-24 pl-32 ${bgColor}`}
        >
          <div className="max-w-2xl">
            <h2 className={`text-3xl font-bold mb-4 ${textColor}`}>{event}</h2>
            <p className={textColor}>
              This is the content for {event}.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}