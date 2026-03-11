/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#1A1A1A',
        accent: '#862633',
        grey: {
          mid: '#7F7F7F',
          light: '#A5A5A5',
          lightest: '#CCCCCC',
        },
      },
      fontFamily: {
        sans: ['Chakra Petch', 'sans-serif'],
      },
      spacing: {
        '4.5': '18px',
      },
      maxWidth: {
        container: '1500px',
        'container-xl': '1220px',
        'container-lg': '1000px',
      },
      borderRadius: {
        DEFAULT: '6px',
      },
    },
  },
  plugins: [],
}
