/** Build the static stylesheet with:
 *  tailwindcss -i css/tailwind.src.css -o css/tailwind.css --minify
 */
module.exports = {
  content: ['./*.html', './products/*.html', './js/*.js'],
  theme: {
    extend: {
      colors: {
        saffron: { DEFAULT: '#F4A340', light: '#FDE4B5', dark: '#D4892A' },
        maroon: { DEFAULT: '#8C2A2A', light: '#C44C4C' },
        teal: { DEFAULT: '#2BA8A0', light: '#A8E6E3' },
        cream: '#FFF8EC',
        'off-white': '#FAF6F0',
        charcoal: '#2A2A2A',
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        ui: ['Poppins', 'Inter', 'sans-serif'],
      },
    },
  },
};
