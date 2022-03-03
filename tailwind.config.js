module.exports = {
  content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  theme: {
    extend: {

      spacing: {
        'kbrw' : '38px',
        'kbrh' : '48px',
        'kbew' : '64px',
        'lrw' : '54px'
      },

      animation: {
        fade: 'fadeOut 5s ease-in-out',
      },


      colors: {
        darkGrey: "#222326",
        darkishGrey: "#27282b",
        grey: "#373B40",
        lightTeal: "#27F2B9",
        teal: "#23D9A5",
        darkTeal: "#327361",
        offWhite: '#c5c6c7',
      },
    },
  },
  plugins: [],
};
