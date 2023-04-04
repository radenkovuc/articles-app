/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            aspectRatio: {
                '16/10': '16 / 10',
            },
        },
    },
    plugins: [],
};
