/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        textColor: '#070d0d',
        primary: '#E3651D',
        secondary: '#d5e6e7',
        accent: '#F78E20',
        secondaryTextColor: '#ecf3f4',
        backgroundColor: '#ecf3f4'
      },
      animation: {
        wave: 'wave 1s infinite linear',
      },
      keyframes: {
        wave: {
          '0%, 100%': {transform: 'translateY(-2px)'},
          '25%, 75%': {transform: 'translateY(0px)'},
          '50%': {transform: 'translateY(2px)'},
        },
      },
        screens: {
          'sm_plus': '667px',
        }
    },
  },
  plugins: [],
};
