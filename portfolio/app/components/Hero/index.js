import React from 'react';

export default function SocialButtons({ colorMode }) {
	const isDarkMode = colorMode === "dark";

	const bgColor = isDarkMode ? "bg-[#1c1c1c]" : "bg-white";
	const textColor = isDarkMode ? "text-white" : "text-black";
	const hoverColor = isDarkMode ? "hover:text-gray-300" : "hover:text-gray-700";
	const borderColor = isDarkMode ? "border-[#636363]" : "border-gray-300";
	const shadowColor = isDarkMode ? "shadow-[0_0_0_1px_rgba(255,255,255,0.1)]" : "shadow-[0_0_0_1px_rgba(0,0,0,0.1)]";
	const glowColor = isDarkMode ? "drop-shadow-[0_0_2px_rgba(255,255,255,0.7)]" : "drop-shadow-[0_0_2px_rgba(255,255,255,0.7)]";

	return (
		<div className="fixed bottom-6 right-8">
			<div className={`${bgColor} py-3 px-10 border ${borderColor} rounded-full flex space-x-8 ${shadowColor} w-max`}>
				<button className={`${textColor} ${hoverColor} transition-colors`}>
					<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`filter ${glowColor}`}>
						<rect width="20" height="16" x="2" y="4" rx="2" />
						<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
					</svg>
				</button>

				<button className={`${textColor} ${hoverColor} transition-colors`}>
					<svg width="40" height="40" viewBox="0 -28.5 256 256" fill={isDarkMode ? "#ffffff" : "#000000"} className={`filter ${glowColor}`}>
						<path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" />
					</svg>
				</button>

				<button className={`${textColor} ${hoverColor} transition-colors`}>
					<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`filter ${glowColor}`}>
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
	);
}