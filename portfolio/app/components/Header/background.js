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

	return (
		<div className={`${colorMode ? 'bg-[#0b0d11]' : 'bg-[#F1F1F1]'} z-[-1] absolute top-0 left-0 w-[100svw] h-[calc(5em+5svh)]`}>
			
		</div>
	);
}