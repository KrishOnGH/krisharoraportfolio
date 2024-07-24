import React, { useEffect } from 'react';

export default function index(colorMode) {
	colorMode = colorMode["colorMode"]
	if (colorMode == "light") {
		colorMode = false
	}
	else {
		colorMode = true
	}
	
	return (
		<div>
			
		</div>
	);
}