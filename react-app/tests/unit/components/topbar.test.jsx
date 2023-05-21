import { screen } from "@testing-library/react";
import TopBar from "../../../src/components/TopBar";
import { renderWithProviders, setupStoreUser } from "../../test-utils";
import { vi } from "vitest";

vi.mock("react-router-dom", () => ({
    ...vi.importActual("react-router-dom"),
    useNavigate: () => vi.fn(),
}));

const actionMenuListSelector = ["menu"];

describe("TopBar", () => {
    it("renders correctly", () => {
        renderWithProviders(<TopBar />, { store: setupStoreUser() });

        const titleElement = screen.getByRole("heading", {
            name: "RPG Manager",
        });
        expect(titleElement).toBeInTheDocument();

        const globalSearch = screen.getByRole("textbox");
        expect(globalSearch).toBeInTheDocument();

        const loadingUser = screen.getByRole("heading", { name: /loading/i });
        expect(loadingUser).toBeInTheDocument();
    });

    it("displays username when loaded", async () => {
        renderWithProviders(<TopBar />, { store: setupStoreUser() });

        const userName = await screen.findByRole("heading", {
            name: /hello, test/i,
        });
        expect(userName).toBeInTheDocument();
    });

    it("not displays user toolbar menu when rendered and user received", async () => {
        renderWithProviders(<TopBar />, { store: setupStoreUser() });

        await screen.findByRole("heading", {
            name: /hello, test/i,
        });

        const actionsMenu = screen.queryByRole(actionMenuListSelector);
        expect(actionsMenu).not.toBeInTheDocument();
    });
});
