import { render, screen, fireEvent } from "@testing-library/react";
import Register from "../../../src/pages/Register";
import { Provider } from "react-redux";
import { store } from "../../../src/store";

vi.mock("react-router-dom", () => ({
    ...vi.importActual("react-router-dom"),
    useNavigate: () => vi.fn(),
}));

describe("Register", () => {
    it("renders correctly", () => {
        render(
            <Provider store={store}>
                <Register />
            </Provider>
        );
        const titleElement = screen.getByRole("heading", {
            name: "RPG Manager",
        });
        expect(titleElement).toBeInTheDocument();

        const emailField = screen.getByLabelText(/email/i);
        expect(emailField).toBeInTheDocument();

        const passwordField = screen.getByLabelText(/password/i);
        expect(passwordField).toBeInTheDocument();

        const submitButton = screen.getByRole("button", {
            name: /Submit/i,
        });
        expect(submitButton).toBeInTheDocument();

        const registerButton = screen.getByRole("button", {
            name: /Register/i,
        });
        expect(registerButton).toBeInTheDocument();
    });

    it("switches to register correctly", () => {
        render(
            <Provider store={store}>
                <Register />
            </Provider>
        );
        fireEvent.click(screen.getByRole("button", { name: /Register/i }));

        const usernameField = screen.getByRole("textbox", { name: "username" });
        expect(usernameField).toBeInTheDocument();

        const emailField = screen.getByLabelText(/email/i);
        expect(emailField).toBeInTheDocument();

        const passwordField = screen.getByLabelText(/password/i);
        expect(passwordField).toBeInTheDocument();

        const submitButton = screen.getByRole("button", {
            name: /Submit/i,
        });
        expect(submitButton).toBeInTheDocument();

        const registerButton = screen.getByRole("button", {
            name: /Login/i,
        });
        expect(registerButton).toBeInTheDocument();
    });

    it("allows to input values in text fields", () => {
        render(
            <Provider store={store}>
                <Register />
            </Provider>
        );
        fireEvent.click(screen.getByRole("button", { name: /Register/i }));

        const userData = {
            username: "testusername",
            email: "test@example.com",
            password: "testpass",
        };

        const usernameField = screen.getByRole("textbox", { name: "username" });
        fireEvent.change(usernameField, {
            target: { value: userData.username },
        });
        expect(usernameField.value).toBe(userData.username);

        const emailField = screen.getByLabelText(/email/i);
        fireEvent.change(emailField, {
            target: { value: userData.email },
        });
        expect(emailField.value).toBe(userData.email);

        const passwordField = screen.getByLabelText(/password/i);
        fireEvent.change(passwordField, {
            target: { value: userData.password },
        });
        expect(passwordField.value).toBe(userData.password);
    });
});
