module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#0e1015',
        'second': '#0c0e13',
        'secondary': '#181a20',
        'content': '#181a20',
      },
      backgroundImage: {
        'mockup': "url('/src/assets/mockup.png')",
      }
    },
  },
  plugins: [],
}
