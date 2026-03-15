/** @type {import('postcss').Config} */
const config = {
    plugins: {
        "postcss-nesting": {},
        "@tailwindcss/postcss": {}, // Use the new TailwindCSS PostCSS package
        autoprefixer: {},
    },
};
export default config;
