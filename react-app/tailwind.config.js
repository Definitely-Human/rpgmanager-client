/** @type {import('tailwindcss').Config} */
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
                    900: "#26262d",
                    800: "#2d2d34",
                    700: "#393942",
                },
                error: "#d65108",
                info: "#6494aa",
            },
        },
    },
    plugins: [],
};
