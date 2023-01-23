/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/**",
    "./app/**/*.{html,css,js,ts,jsx,tsx}",
    "./pages/**/*.{html,css,js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
	theme: {
		extend: {
		  colors: {
		  'background': '#36424C',
		  'orange': '#D2BFA8',
		  'grey': '#B5B8BA',
		  'grey-timeline': '#B5B8BB'
		}
	  },
  },
  plugins: [],
}