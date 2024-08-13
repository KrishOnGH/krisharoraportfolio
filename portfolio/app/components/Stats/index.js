import React from 'react';
import { FaPython, FaJs, FaHtml5, FaCss3Alt, FaGithub } from 'react-icons/fa';
import { SiNextdotjs, SiReact, SiCsharp, SiGo, SiPostgresql, SiFigma } from 'react-icons/si';

const techIcons = {
  "Python": <FaPython />,
  "Javascript": <FaJs />,
  "HTML": <FaHtml5 />,
  "CSS": <FaCss3Alt />,
  "Next.js": <SiNextdotjs />,
  "react native": <SiReact />,
  "C Sharp": <SiCsharp />,
  "Go": <SiGo />,
  "Postgresql": <SiPostgresql />,
  "Figma": <SiFigma />,
  "Github": <FaGithub />,
};

export default function PortfolioBentoBox({ colorMode }) {
  const isDarkMode = colorMode === 'dark';
  const textColor = isDarkMode ? 'text-white' : 'text-black';
  const boxBgColor = isDarkMode ? 'bg-[#1C1C1C]' : 'bg-white';
  const borderColor = isDarkMode ? "border-[#636363]" : "border-gray-300";
  const glowColor = isDarkMode ? "drop-shadow-[0_0_2px_rgba(255,255,255,0.7)]" : "drop-shadow-[0_0_2px_rgba(255,255,255,0.7)]";

  return (
    <div className={`${textColor} p-4 md:p-8`}>
      <h1 className={`${glowColor} text-4xl md:text-5xl font-bold text-center mb-8`}>Statistics</h1>

      <div className="grid grid-cols-1 gap-4 max-w-7xl mx-auto mb-20 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-8">
        <div className={`${boxBgColor} rounded-lg p-6 col-span-1 md:col-span-1 border ${borderColor}`}>
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p>Text</p>
        </div>

        <div className={`${boxBgColor} rounded-lg p-6 col-span-1 sm:col-span-1 border ${borderColor}`}>
          <h2 className="text-2xl font-semibold mb-4">Projects Created</h2>
          <p className="text-4xl font-bold">10</p>
        </div>

        <div className={`${boxBgColor} relative rounded-lg p-6 col-span-1 sm:col-span-1 border ${borderColor}`}>
          <h2 className="text-2xl font-semibold mb-4">Years of Experience</h2>
          <p className="text-4xl font-bold">4</p>
          <p className='absolute text-lg bottom-4 right-4'>Since 2020</p>
        </div>

        <div className={`${boxBgColor} rounded-lg p-6 col-span-1 md:col-span-2 border ${borderColor}`}>
          <h2 className="text-2xl font-semibold mb-4">Languages & Tools</h2>
          <div className="grid grid-cols-3 gap-4">
            {Object.entries(techIcons).map(([key, icon]) => (
              <div key={key} className="flex flex-col items-center">
                <div className="text-3xl mb-2">{icon}</div>
                <span className="text-sm capitalize">{key}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`${boxBgColor} rounded-lg p-6 col-span-1 md:col-span-1 border ${borderColor}`}>
          <h2 className="text-2xl font-semibold mb-4">Hobbies</h2>
          <p>Placeholder</p>
        </div>
      </div>
    </div>
  );
}
