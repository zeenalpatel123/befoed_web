/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        '14' : ['14px','20px'], 
        '16' : ['16px','26px'], 
        '18' : ['18px','24px'], 
        '20' : ['20px','28px'],
        '22' : ['22px','30px'],
        '24' : ['24px','32px'], 
        '28' : ['28px','36px'], 
        '30' : ['30px','40px'],
        '48' : ['48px','56px'],
      },
      colors:{
        'primary':'#3C51A0',
        'secondary':'#0F172A',
        'b1': '#94A3B8',
        'b2' : '#1E293B',
        'b3' : '#E2E8F0',
        'b4' : '#F8FAFC',
        'b5' : '#CBD5E1',
        'b6' : '#F3F4F6',
        'b7' : '#0C0F35',
        'b8' : '#475569',
        'error':'#DC2626',
        'error2' : '#B01212',
        'green' : '#11A75C',
      },
      fontFamily: {
        'kumbh' : ['Kumbh Sans','sans-serif'],
   
      },
      backgroundImage: {
        'primary_gra': 'linear-gradient(90deg, #EC008C 0%, #FC6767 100%)',
      },
    },
  },
  plugins: [],
}

