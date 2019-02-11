describe('home page', () => {
  it('should allow  to consult a draw detail and go back', () => {
    cy.visit('/');
    cy.getByText(/view draw/i).click();
    cy.url().should('include', '/draw/');

    cy.getAllByTestId('assignment').should('have.length', "3");

    // go back
    cy.getByText(/back/i).click();
    cy.url().should('eq',`${Cypress.config().baseUrl}/`);
  });

  it('should display an error message if the draw does not exist', () => {
    const invalidID = 'ASD8-ZEEQD88';
    cy.visit(`/draw/${invalidID}`);
    cy.queryAllByTestId('assignment').should('be.empty');
    cy.getByText(`No draw found for the ID ${invalidID}`);
  });


  it('should allow  to consult an assignment and go back', () => {
    cy.visit('/');
    cy.getByText(/view assignment/i).click();
    cy.url().should('include', '/assignment/');


    // go back
    cy.getByText(/back/i).click();
    cy.url().should('eq',`${Cypress.config().baseUrl}/`);
  });

});
