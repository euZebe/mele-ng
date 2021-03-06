describe("From home page", () => {
  it('should display an error message while creating an incomplete draw', () => {
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

    // missing name => error messagew
    cy.url().should("eq", `${Cypress.config().baseUrl}/new-draw`);
    cy.queryByTestId("errorMessage").should("exist");

    // validation OK => creation
    cy.getByPlaceholderText(/draw name/i).type("Noël 2019");
    cy.getByText(/blend/i).click();
    cy.url().should('match', new RegExp(`^${Cypress.config().baseUrl}/draw/`));

    cy.getAllByTestId('assignment').should('have.length', 3);

    cy.getByText(/back/i).click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
  });

  it("should be possible do cancel draw creation and go back to home", () => {
    cy.visit("/");
    cy.getByText(/new draw/i).click();
    cy.getByText(/cancel/i).click();
    cy.url().should("eq", `${Cypress.config().baseUrl}/`);
  });
});
