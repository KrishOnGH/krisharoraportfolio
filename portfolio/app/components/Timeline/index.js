import React, { useState, useEffect, useRef } from 'react';

const timelineEvents = [
	"First Event",
	"Second Event",
	"Third Event",
	"Fourth Event",
	"Fifth Event"
];

const timelineEventsDisplaying = [
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
	
	const refs = useRef([]);

	useEffect(() => {
		refs.current = refs.current.slice(0, timelineEvents.length);
	}, [timelineEvents.length]);

	const textColor = isDarkMode ? 'text-white' : 'text-black';
	const borderColor = isDarkMode ? "border-[#636363]" : "border-gray-300";
	const glowColor = isDarkMode ? "drop-shadow-[0_0_2px_rgba(255,255,255,0.7)]" : "drop-shadow-[0_0_2px_rgba(255,255,255,0.7)]";

	useEffect(() => {
		let lastScrollTop = 0;
		let isSnapping = false;
	
		const handleScroll = () => {
			if (isSnapping) return;
	
			const scrollPosition = window.scrollY;
			const viewportHeight = window.innerHeight;
	
			if (containerRef.current && timelineRef.current) {
				const containerRect = containerRef.current.getBoundingClientRect();
				const containerTop = containerRect.top + scrollPosition;
				const containerBottom = containerRect.bottom + scrollPosition;
	
				if (scrollPosition < containerTop) {
					timelineRef.current.style.position = 'absolute';
				} else if (scrollPosition + viewportHeight > containerBottom) {
					timelineRef.current.style.position = 'absolute';
				} else {
					timelineRef.current.style.position = 'fixed';
				}
			}
	
			const eventTops = refs.current.map(ref => 
				ref ? ref.getBoundingClientRect().top + window.scrollY - window.innerHeight / 4 : 0
			);			  
	
			if (scrollPosition >= containerRef.current.offsetTop && scrollPosition + viewportHeight <= containerRef.current.offsetTop + containerRef.current.offsetHeight) {
				let currentIndex

				for (let i = eventTops.length - 1; i >= 0; i--) {
					if (scrollPosition >= eventTops[i]) {
						currentIndex = i;
						break;
					}
				}
	
				if (scrollPosition > lastScrollTop && currentIndex < eventTops.length - 1) {
					// Scrolling down
					isSnapping = true;
					window.scrollTo(0, eventTops[currentIndex + 1] + viewportHeight / 4);
					setActiveIndex(currentIndex + 1);
				} else if (scrollPosition < lastScrollTop && currentIndex > 0) {
					// Scrolling up
					isSnapping = true;
					window.scrollTo(0, eventTops[currentIndex - 1] + viewportHeight / 4);
					setActiveIndex(currentIndex - 1);
				}
			} else {
				for (let i = eventTops.length - 1; i >= 0; i--) {
					if (scrollPosition >= eventTops[i]) {
						setActiveIndex(i);
						break;
					}
				}
			}
	
			lastScrollTop = scrollPosition <= 0 ? 0 : scrollPosition;
	
			setTimeout(() => {
				isSnapping = false;
			}, 400);
		}
	
		window.addEventListener('scroll', handleScroll);
		handleScroll();
	
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div ref={containerRef} className={`relative ${textColor} w-full overflow-hidden`}>
			<div
				ref={timelineRef}
				className="absolute left-1/2 -translate-x-1/2 w-3/4"
				style={{ top: '100px' }}
			>
				<div className={`h-0.5 ${borderColor} w-full absolute top-1.5`}></div>
				{timelineEvents.map((event, index) => (
					<div
						key={index}
						className={`absolute w-3 h-3 rounded-full cursor-pointer ${index === activeIndex ? 'bg-blue-500' : isDarkMode ? 'bg-gray-600' : 'bg-gray-400'
							}`}
						style={{
							left: `calc(${(index / (timelineEvents.length - 1)) * 100}% - 6px)`,
							top: '0'
						}}
						onClick={() => setActiveIndex(index)}
					>
						<span className={`${index === activeIndex ? glowColor : textColor} absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm`}>
							{event}
						</span>
					</div>
				))}
			</div>

			<div ref={el => refs.current[0] = el} className={`${textColor} flex justify-center items-center h-screen w-screen`}>
				Content placeholder for event 1
			</div>

			<div ref={el => refs.current[1] = el} className={`${textColor} flex justify-center items-center h-screen w-screen`}>
				Content placeholder for event 2
			</div>

			<div ref={el => refs.current[2] = el} className={`${textColor} flex justify-center items-center h-screen w-screen`}>
				Content placeholder for event 3
			</div>

			<div ref={el => refs.current[3] = el} className={`${textColor} flex justify-center items-center h-screen w-screen`}>
				Content placeholder for event 4
			</div>

			<div ref={el => refs.current[4] = el} className={`${textColor} flex justify-center items-center h-screen w-screen`}>
				Content placeholder for event 5
			</div>
		</div>
	);
}