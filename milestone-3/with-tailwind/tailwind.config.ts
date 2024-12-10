import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			col1: '#4D5053',
  			col2: '#FFFFFF',
  			col3: '#292F36',
  			col4: '#000000',
  			col5: '#CDA274',
  			col6: '#D8A876',
  			col7: '#D9D9D9',
  			col8: '#000000',
  			col9: '#C76904',
  			col10: '#E7E7E7',
  			col11: '#FFFFFF',
  			col12: '#141414',
  			col13: '#F4F0EC'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
