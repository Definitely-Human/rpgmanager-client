module.exports = {
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "plugin:testing-library/react",
        "plugin:cypress/recommended",
    ],
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    settings: { react: { version: "18.2" } },
    plugins: ["react-refresh", "testing-library", "cypress"],
    rules: {
        "react-refresh/only-export-components": "warn",
    },
    overrides: [
        {
            // 3) Now we enable eslint-plugin-testing-library rules or preset only for matching testing files!
            files: [
                "**/__tests__/**/*.[jt]s?(x)",
                "**/?(*.)+(spec|test).[jt]s?(x)",
            ],
            extends: ["plugin:vitest/recommended"],
        },
    ],
};
