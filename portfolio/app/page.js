'use client'
import React, { useEffect, useState } from 'react';
import './globals.css'
import Bkg from './components/Header/background';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats'
import Timeline from './components/Timeline'
import Footer from './components/Footer';

export default function Home() {
  const [mode, setMode] = useState("dark");

	useEffect(() => {
		let storedMode = localStorage.getItem("landingColorMode");
		if (storedMode !== null) {
			setMode(storedMode);
		}

		const intervalId = setInterval(() => {
			let storedMode = localStorage.getItem("landingColorMode");
			if (storedMode !== null) {
				setMode(storedMode);
			}
      console.log(storedMode)
		}, 250);

		return () => clearInterval(intervalId);
	}, []);

  return (
    <main>
      <div className={`w-screen ${mode == 'dark' ? 'bg-[#0b0d11]' : 'bg-[#FDFDFD]'}`}>
				<div className='fixed z-[-2]'>
					<Bkg colorMode={mode} />
				</div>
        <div className="sticky w-full top-0 z-[100]">
          <Header colorMode={mode} />
        </div>
        <div className="w-[100svw]" id="home">
          <Hero colorMode={mode} />
        </div>
        <div className="w-[100svw]" id="stats">
          <Stats colorMode={mode} />
        </div>
        <div className="w-[100svw]" id="timeline">
          <Timeline colorMode={mode} />
        </div>
        <div className="z-[15]">
          <Footer colorMode={mode} />
        </div>
      </div>
    </main>
  );
}
