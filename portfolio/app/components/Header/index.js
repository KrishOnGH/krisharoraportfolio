import React, { useEffect, useState } from 'react';
import { useSpring, animated } from "react-spring";

export default function index(colorMode) {
	colorMode = colorMode["colorMode"]
	if (colorMode == "light") {
		colorMode = false
	}
	else {
		colorMode = true
	}

	useEffect(() => {
		const handleClick = () => {
			let notMode = ""
			if (localStorage.getItem("landingColorMode") == "light") { notMode = "dark" }
			else { notMode = "light" }
			localStorage.setItem("landingColorMode", notMode)
		};

		const element = document.getElementById('mode');

		if (element) {
			element.addEventListener('click', handleClick);
		}

		return () => {
			if (element) {
				element.removeEventListener('click', handleClick);
			}
		};
	}, []);

	const properties = {
		sun: {
			r: 9,
			transform: "rotate(40deg)",
			cx: 12,
			cy: 4,
			opacity: 0
		},
		moon: {
			r: 5,
			transform: "rotate(90deg)",
			cx: 30,
			cy: 0,
			opacity: 1
		},
		springConfig: { mass: 4, tension: 250, friction: 35 }
	};
	const { r, transform, cx, cy, opacity } = colorMode
		? properties["moon"]
		: properties["sun"];
	const svgContainerProps = useSpring({
		transform,
		config: properties.springConfig
	});
	const centerCircleProps = useSpring({ r, config: properties.springConfig });
	const maskedCircleProps = useSpring({
		cx,
		cy,
		config: properties.springConfig
	});
	const linesProps = useSpring({ opacity, config: properties.springConfig });

	return (
		<header className={`${colorMode ? 'text-white navglass' : 'text-black navglass-light'} body-font border-b-2 border-neutral-800`}>
			<div className="container mx-auto flex flex-wrap py-3 md:py-5 lg:justify-between px-5 text-sm md:px-10 flex-row items-center">
				<a className="flex items-center text-xl font-bold px-5 lg:px-0">
					Krish Arora
				</a>

				<div className='lg:ml-[auto] lg:mr-auto'>
					<nav className="ml-[44px] hidden lg:flex flex-wrap items-center border-2 border-neutral-800 rounded-full py-1 px-5">
						<a className={`${colorMode ? 'hover:text-white' : 'hover:text-black'}`} href={`#home`}>Home</a>
					</nav>
				</div>

				<button className={`${colorMode ? 'bg-gray-1 hover:bg-gray-2 border-gray-7' : 'bg-gray-14 hover:bg-gray-13 border-gray-8'} border-2 p-[0.5em] rounded-[2em] modetoggle ml-5 mr-2 lg:mr-0`} id={"mode"}>
					<animated.svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						style={{ ...svgContainerProps, cursor: "pointer" }}
						onClick={() => colorMode = !colorMode}
					>
						<mask id="mask">
							<rect x="0" y="0" width="100%" height="100%" fill="white" />
							<animated.circle
								style={maskedCircleProps}
								cx="12"
								cy="4"
								r="9"
								fill="black"
							/>
						</mask>
						<animated.circle
							style={centerCircleProps}
							fill="black"
							cx="12"
							cy="12"
							r="9"
							mask="url(#mask)"
						/>

						<animated.g style={linesProps} fill="black">
							<line x1="12" y1="1" x2="12" y2="3" />
							<line x1="12" y1="21" x2="12" y2="23" />
							<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
							<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
							<line x1="1" y1="12" x2="3" y2="12" />
							<line x1="21" y1="12" x2="23" y2="12" />
							<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
							<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
						</animated.g>
					</animated.svg>
				</button>
			</div>
		</header>
	);
}