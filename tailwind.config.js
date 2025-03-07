/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-dark': 'var(--primary-dark)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
      },
      backgroundColor: {
        'gradient-start': 'var(--bg-gradient-start)',
        'gradient-middle': 'var(--bg-gradient-middle)',
        'gradient-end': 'var(--bg-gradient-end)',
      },
    },
  },
  plugins: [],
}

