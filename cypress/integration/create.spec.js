describe('From home page', () => {
  it('should be possible to create a new draw', () => {
    cy.visit('/');
    cy.getByText(/new draw/i).click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/new-draw`);
  });

  it('should be possible do cancel draw creation and go back to home', () => {
    cy.visit('/');
    cy.getByText(/new draw/i).click();
    cy.getByText(/cancel/i).click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/`);  })
});
