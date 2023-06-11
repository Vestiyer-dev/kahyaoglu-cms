// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './components/**/*.{js,ts,jsx,tsx}',
//     './intro-template/**/*.{js,ts,jsx,tsx}',
//     './pages/**/*.{js,ts,jsx,tsx}',
//     './plugins/**/*.{js,ts,jsx,tsx}',
//   ],
//   theme: {
//     extend: {
//       colors: {
//         'accent-1': '#FAFAFA',
//         'accent-2': '#EAEAEA',
//         'accent-7': '#333',
//         success: '#0070f3',
//         cyan: '#79FFE1',
//         'blue-500': '#2276FC',
//         'yellow-100': '#fef7da',
//       },
//       spacing: {
//         28: '7rem',
//       },
//       letterSpacing: {
//         tighter: '-.04em',
//       },
//       lineHeight: {
//         tight: 1.2,
//       },
//       fontSize: {
//         '5xl': '2.5rem',
//         '6xl': '2.75rem',
//         '7xl': '4.5rem',
//         '8xl': '6.25rem',
//       },
//       boxShadow: {
//         small: '0 5px 10px rgba(0, 0, 0, 0.12)',
//         medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
//       },
//     },
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    // './intro-template/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './plugins/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: ['outline-none'],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '1920px',
      },
      colors: {
        primary: 'var(--primary)',
        'primary-dark': 'var(--primary-dark)',
        'background-primary':'var(--background-primary)',
        'background-secondary':'var(--background-secondary)',
        'primary-2': 'var(--primary-2)',
        secondary: 'var(--secondary)',
        'secondary-2': 'var(--secondary-2)',
        hover: 'var(--hover)',
        'hover-1': 'var(--hover-1)',
        'hover-2': 'var(--hover-2)',
        'accent-0': 'var(--accent-0)',
        'accent-1': 'var(--accent-1)',
        'accent-2': 'var(--accent-2)',
        'accent-3': 'var(--accent-3)',
        'accent-4': 'var(--accent-4)',
        'accent-5': 'var(--accent-5)',
        'accent-6': 'var(--accent-6)',
        'accent-7': 'var(--accent-7)',
        'accent-8': 'var(--accent-8)',
        'accent-9': 'var(--accent-9)',
        violet: 'var(--violet)',
        'violet-light': 'var(--violet-light)',
        'violet-dark': 'var(--violet-dark)',
        pink: 'var(--pink)',
        'pink-light': 'var(--pink-light)',
        cyan: 'var(--cyan)',
        blue: 'var(--blue)',
        'blue-light': 'var(--blue-light)',
        'blue-dark': 'var(--blue-dark)',
        green: 'var(--green)',
        red: 'var(--red)',
        'typer': 'var(--typer)',
      },
      textColor: {
        base: 'var(--text-base)',
        primary: 'var(--primary)',
        secondary: 'var(--text-secondary)',
      },
      boxShadow: {
        'outline-normal': '0 0 0 2px var(--accent-2)',
        magical:
          'rgba(0, 0, 0, 0.02) 0px 30px 30px, rgba(0, 0, 0, 0.03) 0px 0px 8px, rgba(0, 0, 0, 0.05) 0px 1px 0px',
      },
      lineHeight: {
        'extra-loose': '2.2',
      },
      scale: {
        120: '1.2',
      },
    },
  },
  plugins: [

    require('@tailwindcss/typography'),

  ],
}
