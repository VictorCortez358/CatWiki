import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        monserrat: ['Montserrat', 'sans-serif'],
      },
      width: {
        portrait : '85%',
      },
      height: {
        imgHeight : '540px',
      },
      screens: {
        laptop: {'max': '1279px'},
        lg: {'max': '1023px'},
        tablet: {'max': '767px'},
        phone: {'max': '479px'},
      },
      fontSize: {
        phone: ['10px', '12px'],
      },
      backgroundColor: {
        grayPerson: '#E3E1DC',
      },
    },
  },
  plugins: [],
}
export default config
