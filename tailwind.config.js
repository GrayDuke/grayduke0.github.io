/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    screens: {
      'bigdesk': {'min':'1536px'},
      'desktop': {'max':'1535px'},
      'laptop': {'max':'1279px'},
      'tablet': {'max':'1023px'},
      'phone':{'max':'639px'},
    },
    
    container:{
      padding:'20px',
      center:true,
    },
    extend: {
      colors: {
        'first':'#d9a85d',
        'second': '#f1f1f1',
        'third':'#909096',
        'firth':'#eadbc0',
      },
    },
  },
  plugins: [],
}
