


import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            padding: {
                default: '24px',
            },
            margin: {
                default: '24px',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
            },
            backgroundColor: {
                'offblack': '#0E1112',
                'black': '#0E1112',
                'white': '#f1f1ef',
                'dash-green': '#ff050d03',
                'dash-border': '#192109',
                'dash-green-alt': '#0f170d',
                'dash-grey-card': '#282828',
                'dash-grey': '#1c1c1c',
            },
            colors: {
                cream: '#efefee',
                'cream-dark': '#14155f',
                'offblack': '#0E1112',
                'white': '#f1f1ef',
                'dash-green': '#ff050d03',
                'dash-border': '#192109',
                'dash-green-alt': '##0f170d',
                'dash-grey': '#1c1c1c',
                'dash-grey-card': '#282828',
            },
        },
    },
    plugins: [],
}
export default config
