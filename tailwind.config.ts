import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'minmax-64': 'repeat(auto-fit, minmax(64px, 1fr))',
        'minmax-128': 'repeat(auto-fit, minmax(128px, 1fr))'
      },
      keyframes: {
        'appear-from-top': {
          from: { opacity: '0', transform: 'translateY(-300px)' },
          to: { opacity: '1', transform: 'translateY(0px)' }
        },
        'disappear-to-bottom': {
          from: { opacity: '1', transform: 'translateY(0px)', },
          to: { opacity: '0', transform: 'translateY(300px)' }
        },
      },
      animation: {
        'appear-from-top': 'appear-from-top 300ms ease-in-out forwards',
        'disappear-to-bottom': 'disappear-to-bottom 300ms ease-in-out forwards',
      },
    },
  },
  plugins: [],
}
export default config
