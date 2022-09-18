module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      fontSize: {
        h2: '35px',
        h3: '25px',
        h4: '16px'
      },
      fontFamily: {
        mono: ['Dank Mono', 'sans-serif'],
        body: ['Tahoma', 'sans-serif'],
        serif: ['Cambria', 'serif']
      }
    },
    screens: {
      'tablet': '640px'
    }
  },
  plugins: [],
};
