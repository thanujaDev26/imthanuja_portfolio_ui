import scrollbarHide from 'tailwind-scrollbar-hide';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: {
                    DEFAULT: "#050505",
                    100: "#0a0a0a",
                    200: "#101010",
                    300: "#181818",
                },
                neon: {
                    cyan: "#00fff2",
                    violet: "#7d41ff",
                    green: "#00ff9d",
                    blue: "#2962ff",
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #7d41ff 0deg, #00fff2 180deg, #7d41ff 360deg)',
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                glow: {
                    '0%': { boxShadow: '0 0 5px #00fff2, 0 0 10px #00fff2' },
                    '100%': { boxShadow: '0 0 20px #00fff2, 0 0 40px #00fff2' },
                }
            }
        },
    },
    plugins: [
        scrollbarHide
    ],
}
