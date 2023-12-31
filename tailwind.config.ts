import type { Config } from 'tailwindcss'

const config: Config = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-sourceSans)']
            },
            colors: {
                black: '#111',
                solidblack: '#333',
                darkgray: '#666',
                solidgray: '#f0f0f0',
                middlegray: '#ebebeb',
                primary: '#7843e9',
                solidwhite: '#fefefe',
                danger: '#dc3545'
            },
            boxShadow: {
                strong: '0 10px 100px rgba(0,0,0,.1);'
            }
        }
    },
    plugins: []
}
export default config
