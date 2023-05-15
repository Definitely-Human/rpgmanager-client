import { render, screen } from "@testing-library/react";
import Register from "../../../src/pages/Register";

describe("Register", () => {
    it("renders correctly", () => {
        render(<Register />);
        const titleElement = screen.getByRole("heading", {
            name: "RPG Manager",
        });
        expect(titleElement).toBeInTheDocument();

        const emailField = screen.getByLabelText(/email/i);
        expect(emailField).toBeInTheDocument();

        const passwordField = screen.getByLabelText(/password/i);
        expect(passwordField).toBeInTheDocument();
    });
});
