import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
	theme: {
		extend: {
			colors: {
				'text-normal-dark': '#9f9f9f',
				'text-important-dark': '#d9d9d9',
				'text-header-dark': '#ffffff',
				'text-normal-light': '#606060',
				'text-important-light': '#262626',
				'text-header-light': '#000000',
				'dark': '#050505',
				'dark-1': '#1f1f1f',
				'dark-2': '#2f2f2f',
				'dark-3': '#3f3f3f',
				'dark-4': '#4f4f4f',
				'dark-5': '#5f5f5f',
				'dark-6': '#6f6f6f',
				'dark-7': '#7f7f7f',
				'dark-8': '#8f8f8f',
				'dark-9': '#9f9f9f',
				'light': '#ffffff',
				'light-1': '#fcfcfc',
				'light-2': '#ececec',
				'light-3': '#dfdfdf',
				'light-4': '#cfcfcf',
				'light-5': '#bfbfbf',
				'light-6': '#acacac',
				'light-7': '#9f9f9f',
				'light-8': '#8f8f8f',
				'light-9': '#7f7f7f',
				'gray-1': '#101010',
				'gray-2': '#202020',
				'gray-3': '#303030',
				'gray-4': '#404040',
				'gray-5': '#505050',
				'gray-6': '#606060',
				'gray-7': '#707070',
				'gray-8': '#808080',
				'gray-9': '#909090',
				'gray-10': '#a0a0a0',
				'gray-11': '#b0b0b0',
				'gray-12': '#c0c0c0',
				'gray-13': '#d0d0d0',
				'gray-14': '#e0e0e0',
				'gray-15': '#f0f0f0'
			}
		},
	},
  plugins: [],
};
export default config;