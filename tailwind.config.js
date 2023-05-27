''/** @type {import('tailwindcss').Config} */
module.exports = {
content: ['./components/*/.{html,js}',
'./pages/*/.{html,js}',
'index.html'],
    theme: {
        screens: {
      vs:'150px',      
      gf:'280px',
      ms:'320px',
      mm:'375px',
      ml:'425px',
      sm: '640px',
      md: '768px',
      td: '992px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
      extend: {
          backgroundImage: {
        'banner-bg-mobile': "url('../images/gradient_backgound.png')",
          'footer-bg': "url('../images/grid-bg.png')",
          'upper-curve-bg': "url('../images/white_ecliipse_background.png')",
          'poster-bg': "url('../images/poster-bg.png')",
          'car-rental-bg': "url('../images/car-rental.png')",

        hulugradient: 'linear-gradient(to right, #ebf2ef 50%, #127F4A 50%);',
      },
            colors: {
              'sitegreen': '#127F4A',
              'sitegreen-dark':'#033F22',
              'sitegrey':'#EBF2EF'
      },
       fontFamily: {
    sanssarif:['lato','sans-serif'],
      
    },
    
},
},
plugins: [],
}