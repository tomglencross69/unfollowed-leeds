/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        customLinkBlue: '#0000EE',
      },
      fontFamily: {
        'custom-gothic' :['MyCustomGothicFont', 'serif']
      }
    },
  },
  plugins: [],
}

