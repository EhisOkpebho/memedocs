/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9683EC',
        pharmacist: '#17C47B',
        doctor: '#107ACA',
        patient: '#36454F'
      }
    },
  },
  plugins: [],
}

