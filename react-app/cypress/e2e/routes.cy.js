import { OWN_URL } from "../../src/utils/testingUrls";

describe("User redirected to home when", () => {
    it("goes to protected routes", () => {
        cy.visit(`${OWN_URL}/play/`);
        cy.url().should("include", OWN_URL);

        cy.visit(`${OWN_URL}/profile/`);
        cy.url().should("include", OWN_URL);
    });
});
