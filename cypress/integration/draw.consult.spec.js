describe('draw consultation', () => {
  it('should allow to view draw details and go back', () => {
    const anyID = "1i3jdh2";
    cy.visit('/');
    cy.getByPlaceholderText('draw ID').type(anyID);
    cy.getByText(/view draw/i).click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/draw/${anyID}`);

    cy.getAllByTestId('assignment').should('have.length', "3");

    // go back
    cy.getByText(/back/i).click();
    cy.url().should('eq',`${Cypress.config().baseUrl}/`);
  });

  it('should allow to submit form using {enter}', () => {
    const anyID = "1i3jdh2";
    cy.visit('/');
    cy.getByPlaceholderText('draw ID').type(`${anyID}{enter}`);
    cy.url().should('eq', `${Cypress.config().baseUrl}/draw/${anyID}`);
  });

  it('should display an error message if the draw does not exist', () => {
    const invalidID = 'ASD8-ZEEQD88';
    cy.visit(`/draw/${invalidID}`);
    cy.queryAllByTestId('assignment').should('be.empty');
    cy.getByText(`No draw found for the ID ${invalidID}`);
  });
});
