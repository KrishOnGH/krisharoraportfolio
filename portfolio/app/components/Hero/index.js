import React, { useEffect } from 'react';
import Movingstarslogic from './movingstars'
import content from '../../../content.json'

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