/** @type {import('postcss').Config} */
export default {
    plugins: {
        "postcss-nesting": {},
        "@tailwindcss/postcss": {}, // Use the new TailwindCSS PostCSS package
        autoprefixer: {},
    },
};
