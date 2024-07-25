import React from 'react';

export default function PortfolioBentoBox({ colorMode }) {
	const isDarkMode = colorMode === 'dark';
	const textColor = isDarkMode ? 'text-white' : 'text-black';
	const boxBgColor = isDarkMode ? 'bg-gray-800' : 'bg-white';
	const borderColor = isDarkMode ? 'border-gray-700' : 'border-gray-300';
    const glowColor = isDarkMode ? "drop-shadow-[0_0_2px_rgba(255,255,255,0.7)]" : "drop-shadow-[0_0_2px_rgba(255,255,255,0.7)]";

	return (
		<div className={`${textColor} min-h-screen p-4 md:p-8`}>
			<h1 className={`${glowColor} text-4xl md:text-5xl font-bold text-center mb-8`}>Statistics</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">

				<div className={`${boxBgColor} rounded-lg p-6 col-span-1 md:col-span-2 border ${borderColor}`}>
					<h2 className="text-2xl font-semibold mb-4">About Me</h2>
				</div>

				<div className={`${boxBgColor} rounded-lg p-6 border ${borderColor}`}>
					<h2 className="text-2xl font-semibold mb-4">Projects Created</h2>
				</div>

				<div className={`${boxBgColor} relative rounded-lg p-6 border ${borderColor}`}>
					<h2 className="text-2xl font-semibold mb-4">Years of Experience</h2>
				</div>

				<div className={`${boxBgColor} rounded-lg p-6 col-span-1 md:col-span-2 border ${borderColor}`}>
					<h2 className="text-2xl font-semibold mb-4">Languages & Tools</h2>
					<div className="grid grid-cols-3 md:grid-cols-6 gap-4">
					</div>
				</div>

				<div className={`${boxBgColor} rounded-lg p-6 col-span-1 lg:col-span-3 border ${borderColor}`}>
				</div>
			</div>
		</div>
	);
}