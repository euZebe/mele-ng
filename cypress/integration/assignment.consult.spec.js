describe("assignment consultation", () => {
  it("should allow  to view an assignment and go back", () => {
    const anyID = "ass1";

    cy.visit("/");
    cy.getByLabelText("assignment ID").type(anyID);
    cy.getByText(/view assignment/i).click();
    cy.url().should("eq", `${Cypress.config().baseUrl}/assignment/${anyID}`);

    cy.getByTestId("from").should("have.text", "Niobé");
    cy.getByTestId("to").should("have.text", "Titóan");

    // go back
    cy.getByText(/back/i).click();
    cy.url().should("eq", `${Cypress.config().baseUrl}/`);
  });
});
