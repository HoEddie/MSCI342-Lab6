describe('Smoke Test', () => {
  it('it can view the home page', () => {
    cy.visit('/');
    cy.contains('Learn React');
  })
})