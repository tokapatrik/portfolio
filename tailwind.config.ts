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
                primary: '#7843e9',
                solidwhite: '#fefefe'
            },
            boxShadow: {
                header: '0 10px 100px rgba(0,0,0,.1);'
            }
        }
    },
    plugins: []
}
export default config
