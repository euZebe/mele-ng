describe('home page', () => {
  it('should allow  to consult a draw detail and go back', () => {
    cy.visit('/');
    cy.getByText(/view draw/i).click();
    cy.url().should('include', '/draw/');

    cy.getByText(/back/i).click();
    cy.url().should('eq',`${Cypress.config().baseUrl}/`);
  });

  it('should allow  to consult an assignment and go back', () => {
    cy.visit('/');
    cy.getByText(/view assignment/i).click();
    cy.url().should('include', '/assignment/');

    cy.getByText(/back/i).click();
    cy.url().should('eq',`${Cypress.config().baseUrl}/`);
  });

});
