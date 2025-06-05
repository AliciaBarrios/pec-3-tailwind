/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,scss}"],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#2a5031',
          light: '#6a994e',
        },
        secondary: {
          dark: '#d4a373',
          light: '#fff3db',
        },
        basic: {
          dark: '#333333',
          grey: '#666',
          light: '#f0f0f0',
        },
        alert: {
          dark: '#f4a261',
          light: '#f9c59d',
        },
        page: '#fafafa',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ],
        serif: ['Georgia', '"Times New Roman"', 'serif'],
        serifDecorative: ["Literata", 'serif'],
      },
      fontSize: {
        'h1-desktop': ['3.5rem', '4.5rem'], // tamaño, line-height
        'h1-mobile': ['2rem', '2.25rem'],
        'h2-desktop': ['2rem', '2.25rem'],
        'h2-mobile': ['1.6rem', '2rem'],
        'h3-desktop': ['1.5rem', '2rem'],
        'h3-mobile': '1.4rem', 
      },
      content: {
        counterItem: 'counter(item)',
      },
      // Para añadir clases personalizadas de counter-reset
      counterReset: {
        item: 'item',
      },
      // Para añadir clases personalizadas de counter-increment
      counterIncrement: {
        item: 'item',
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {
        // Counter reset
        '.counter-reset-item': {
          counterReset: theme('counterReset.item'),
        },
        // Counter increment
        '.counter-increment-item': {
          counterIncrement: theme('counterIncrement.item'),
        },
      }

      addUtilities(newUtilities, ['responsive'])
    },
  ],
}

