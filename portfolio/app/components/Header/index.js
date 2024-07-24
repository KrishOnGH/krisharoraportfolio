import React, { useEffect, useState } from 'react';
import { useSpring, animated } from "react-spring";
import content from '../../../content.json'

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

	useEffect(() => {
		const handleClick = () => {
			window.location.href = content.Landing.CTA[0][1]
		};

		const element = document.getElementById('CTA');

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
		<header>
			
		</header>
	);
}