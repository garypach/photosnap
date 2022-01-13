module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
      screens: {
        'sm': '640px',
        // => @media (min-width: 768px) { ... }
        
        'lg': '1024px',
        // => @media (min-width: 769px) { ... }
      },
    },
    plugins: [],
  }