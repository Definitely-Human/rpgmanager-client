/** @type {import('tailwindcss').Config} */
const percentageWidth = require("tailwindcss-percentage-width");
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    400: "#d59915",
                    DEFAULT: "#ffb20f",
                    600: "#ffc340",
                },
                secondary: {
                    400: "#5fad56",
                    DEFAULT: "#70bb68",
                    600: "#529a4a",
                },
                "gray-blue": {
                    700: "#393942",
                    800: "#2d2d34",
                    900: "#26262d",
                    950: "#1a1a1f",
                },
                error: { 400: "#eb5605", DEFAULT: "#d65108", 600: "#c24806" },
                info: "#6494aa",
            },
        },
    },
    plugins: [percentageWidth],
};
