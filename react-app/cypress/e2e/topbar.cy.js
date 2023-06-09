import { API_URL, OWN_URL } from "../../src/utils/testingUrls";

describe("Topbar", () => {
    it("shows user toolbar when button is hovered", () => {
        cy.intercept("GET", `${API_URL}/user/me/`, { fixture: "user" });
        window.localStorage.setItem("user", JSON.stringify({ token: "token" }));

        cy.visit(`${OWN_URL}/play/`);
        cy.getBySel("user-toolbar-menu").realHover().as("toolbar");
        cy.get("@toolbar").contains(/account/i);
        cy.get("@toolbar").contains(/logout/i);
    });
});
