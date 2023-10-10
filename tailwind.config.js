/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'themeColor': '#4CAF4F',
        'navItems': '#18191F',
        'titleText': '#4D4D4D',
        'paragraph': '#717171',
      },
      backgroundImage: {
        'bannerBg': "url('images/myBanner.jpg')",
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      maxWidth: {
        'customContainer': '1150px',
      },
    },
  },
  plugins: [],
}