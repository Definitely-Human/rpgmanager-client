import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        host: true,
        strictPort: true,
        port: 3000,
    },
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./tests/setup.js",
    },
});
