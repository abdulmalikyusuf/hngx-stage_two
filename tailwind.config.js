/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{ts,tsx,js,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {},
			},
			fontFamily: {
				DMSans: ["DMSans", "san-serif"],
				Poppins: ["Poppins", "san-serif"],
			},
		},
	},
	plugins: [],
};
