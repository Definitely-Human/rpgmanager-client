module.exports = {
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "plugin:vitest/recommended",
        "plugin:testing-library/react",
        "plugin:cypress/recommended",
    ],
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    settings: { react: { version: "18.2" } },
    plugins: ["react-refresh", "vitest", "testing-library", "cypress"],
    rules: {
        "react-refresh/only-export-components": "warn",
    },
};
