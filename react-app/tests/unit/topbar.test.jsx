import { render, screen } from "@testing-library/react";
import TopBar from "../../src/components/TopBar";

describe("TopBar ", () => {
    it("renders headline", () => {
        render(<TopBar />);
        const titleElement = screen.getByRole("Heading", {
            name: "RPG Manager",
        });
        expect(titleElement).toBeInTheDocument();

        const globalSearch = screen.getByRole("textbox");
        expect(globalSearch).toBeInTheDocument();
    });
});
