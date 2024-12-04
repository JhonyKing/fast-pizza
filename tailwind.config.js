/** @type {import('tailwindcss').Config} */
export default{
  content: ['./index.html','./src/**/*.{html,js,jsx}'],
  theme: {
    fontFamily:{
      sans:['Roboto Mono, monospace'],
    },
    extend: {
      height:{
        screen:'100dvh',
      },
      fontFamily:{
        sans:['Roboto Mono, monospace'],
      },
    },
  },
  plugins: [],
};
