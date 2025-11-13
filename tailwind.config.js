// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}" // Add this if you're using src directory
    ],
    theme: {
        extend: {
            animation: {
                'breathing': 'breathing 3s ease-in-out infinite',
                'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
                'fadeInUp': 'fadeInUp 1s ease-out forwards',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                breathing: {
                    '0%, 100%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.05)' },
                },
                'pulse-subtle': {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.8' },
                },
                fadeInUp: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(30px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                },
            },
            animationDelay: {
                '300': '300ms',
                '600': '600ms',
                '1000': '1000ms',
            },
        },
    },
    plugins: [
        function({ addUtilities, theme }) {
            const delays = theme('animationDelay');
            const utilities = Object.entries(delays).map(([key, value]) => ({
                [`.animation-delay-${key}`]: {
                    'animation-delay': value,
                },
            }));
            addUtilities(utilities);
        }
    ],
}