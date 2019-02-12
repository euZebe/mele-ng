describe("assignment consultation", () => {
  it("should allow to view an assignment and go back", () => {
    const anyID = "ass1";

    cy.visit("/");
    cy.getByPlaceholderText("assignment ID").type(anyID);
    cy.getByText(/view assignment/i).click();
    cy.url().should("eq", `${Cypress.config().baseUrl}/assignment/${anyID}`);

    cy.getByTestId("from").should("have.text", "Niobé");
    cy.getByTestId("to").should("have.text", "Titóan");

    // go back
    cy.getByText(/back/i).click();
    cy.url().should("eq", `${Cypress.config().baseUrl}/`);
  });

  it('should allow to submit a "view assignment" form using {enter}', () => {
    const anyID = "ass1";
    cy.visit("/");
    cy.getByPlaceholderText("assignment ID").type(`${anyID}{enter}`);
    cy.url().should("eq", `${Cypress.config().baseUrl}/assignment/${anyID}`);
  });

  it('shoud display an error message when no assignment is found for the given ID', () => {
    const anInvalidID = 'sdfosd';
    cy.visit(`/assignment/${anInvalidID}`);
    cy.getByText(`No assignment found for the ID ${anInvalidID}`);
  });
});
