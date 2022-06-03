module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '5xl': '2560px',
      '7xl': '4560px',
      '8xl': '4900px',
    },
    colors: {
      'blue': '#1fb6ff',
      'white': '#FFFFFF',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'black': '#000000',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#282828 ',
      'gray': '#393939',
      'dark-purple': '#081A51',
      'gray-light': '#989898',
      'light-white': '#f4f5f7',
      'deep-orange': '#FF5A09 ',
      'light-orange': '#ec7f37 ',

    },
    
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      fontFamily: {
        sans: [
          '"Inter"',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        serif: ['Merriweather', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular'],
        poppins: ["Poppins", "sans-serif"],
        adelia: ["ADELIA", "cursive"],
      },
    },
  },
  plugins: [],
}