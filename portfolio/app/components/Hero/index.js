import React, { useState, useEffect } from 'react';

export default function Hero({ colorMode }) {
	const isDarkMode = colorMode === "dark";
	const [scrollY, setScrollY] = useState(150);

	useEffect(() => {
		const handleScroll = () => setScrollY(window.scrollY+150);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const bgColor = isDarkMode ? "bg-[#1c1c1c]" : "bg-white";
	const textColor = isDarkMode ? "text-white" : "text-black";
	const hoverColor = isDarkMode ? "hover:text-gray-300" : "hover:text-gray-700";
	const borderColor = isDarkMode ? "border-[#636363]" : "border-gray-300";
	const shadowColor = isDarkMode ? "shadow-[0_0_0_1px_rgba(255,255,255,0.1)]" : "shadow-[0_0_0_1px_rgba(0,0,0,0.1)]";
	const glowColor = isDarkMode ? "drop-shadow-[0_0_2px_rgba(255,255,255,0.7)]" : "drop-shadow-[0_0_2px_rgba(255,255,255,0.7)]";

	const colors = [
		'bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500',
		'bg-pink-500', 'bg-indigo-500', 'bg-teal-500', 'bg-orange-500',
		'bg-lime-500', 'bg-emerald-500', 'bg-violet-500', 'bg-fuchsia-500'
	];

	const projectPlaceholder = (index, rowIndex) => {
		const colorIndex = (index + rowIndex * 4) % colors.length;
		return (
			<div key={index} className={`w-[20vw] max-w-[400px] h-[calc(0.5625*20vw)] max-h-[calc(0.5625*400px)] ${colors[colorIndex]} rounded-md flex-shrink-0 mx-2`}></div>
		);
	};

	const getRowStyle = (rowIndex) => {
		const direction = rowIndex % 2 === 0 ? 1 : -1;
		const width = .20*window.innerWidth+40
		const offset = (scrollY * 0.3 * direction) % width; // 360 is the width of each item (320px) plus margins (40px)
		return {
			transform: `translateX(${offset}px)`,
			transition: 'transform 0.1s ease-out'
		};
	};

	return (
		<main className='border-b-2 border-neutral-800'>
			<div className="fade-in-delay fixed bottom-6 right-8 z-10">
				<div className={`${bgColor} py-3 px-10 border ${borderColor} rounded-full flex space-x-8 ${shadowColor} w-max`}>
					<button className={`${textColor} ${hoverColor} transition-colors`}>
						<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`filter ${glowColor}`}>
							<rect width="20" height="16" x="2" y="4" rx="2" />
							<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
						</svg>
					</button>

					<button className={`${textColor} ${hoverColor} transition-colors`}>
						<svg width="30" height="30" viewBox="0 -3.5 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" className={`filter ${glowColor}`}>
							<g fill={isDarkMode ? "#ffffff" : "#000000"}>

							<path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0"/>

							<path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398"/>

							</g>
						</svg>
					</button>

					<button className={`${textColor} ${hoverColor} transition-colors`}>
						<svg width="30" height="30" viewBox="0 -28.5 256 256" fill={isDarkMode ? "#ffffff" : "#000000"} className={`filter ${glowColor}`}>
							<path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" />
						</svg>
					</button>

					<button className={`${textColor} ${hoverColor} transition-colors`}>
						<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`filter ${glowColor}`}>
							<rect width="3" height="8" x="13" y="2" rx="1.5" />
							<path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5" />
							<rect width="3" height="8" x="8" y="14" rx="1.5" />
							<path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5" />
							<rect width="8" height="3" x="14" y="13" rx="1.5" />
							<path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5" />
							<rect width="8" height="3" x="2" y="8" rx="1.5" />
							<path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5" />
						</svg>
					</button>
				</div>
			</div>
			
			<div className='min-h-screen w-screen flex items-center justify-center'>
				<div className='w-full flex flex-col lg:flex-row justify-between mx-auto mb-40'>

					<div className='w-full my-auto mx-auto lg:w-[45%] max-w-[800px] xl:ml-[4%]'>
						<div className={`text-center audiowide fade-up ${isDarkMode ? 'text-white' : 'text-black'} text-5xl md:text-6xl xl:text-7xl mb-6`}>
							Krish Arora
						</div>  

						<div className={`text-center fade-in-delay ${isDarkMode ? 'text-white' : 'text-black'} text-lg md:text-xl lg:text-3xl`}>
							Hi there, I'm a passionate developer versed in languages across fields from C# to next.js!
						</div>
					</div>

					<div className='hidden lg:flex flex-col space-y-8 w-[calc(42%+40px)] max-w-[790px] xl:mr-[4%] fade-in-delay overflow-hidden'>
						{[0, 1, 2].map((rowIndex) => (
							<div key={rowIndex} className={`${rowIndex == 1 ? 'flex' : 'flex flex-row-reverse'}`} style={getRowStyle(rowIndex)}>
								{[...Array(3)].map((_, i) => projectPlaceholder(i, rowIndex))}
								{[...Array(3)].map((_, i) => projectPlaceholder(i, rowIndex))}
							</div>
						))}
					</div>

				</div>  
			</div>
		</main>
	);
}