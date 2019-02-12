describe("From home page", () => {
  it.only("should be possible to create a new draw", () => {
    cy.visit("/");
    cy.getByText(/new draw/i).click();
    cy.url().should("eq", `${Cypress.config().baseUrl}/new-draw`);

    // add participants, both using {enter} and "add" button
    cy.getByPlaceholderText(/participant name/i).type("Julia{enter}");
    cy.getByPlaceholderText(/participant name/i).type("Ezéchiel{enter}");
    cy.getByPlaceholderText(/participant name/i).type("Eusèbe");
    cy.getByText(/add participant/i).click();
    cy.queryAllByTestId("participant-item").should("have.length", "3");

    cy.get("input[type=checkbox]").each(c => c.click());

    cy.getByText(/blend/i).click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/draw/df13sd73`);
  });

  it("should be possible do cancel draw creation and go back to home", () => {
    cy.visit("/");
    cy.getByText(/new draw/i).click();
    cy.getByText(/cancel/i).click();
    cy.url().should("eq", `${Cypress.config().baseUrl}/`);
  });
});
