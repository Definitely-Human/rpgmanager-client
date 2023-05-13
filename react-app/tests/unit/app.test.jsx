import { render, screen } from "@testing-library/react";
import App from "../../src/App";

describe("App", () => {
    it("renders headline", () => {
        render(<App />);
        expect(screen.getByText("Home")).toBeInTheDocument();
    });
});
