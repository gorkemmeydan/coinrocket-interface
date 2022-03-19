/// <reference types="cypress" />

describe('Logout ', () => {
  beforeEach(() => {
    cy.visit('/login');
    cy.get('input[name="email"]').type('test@test.com');
    cy.get('input[name="password"]').type('123456');
    cy.get('button').click();
    cy.location('pathname').should('eq', '/app/dashboard');
  });

  it('should show elements', () => {
    cy.get('[class^="LogoutButtonstyled__TextWrapper"]').click();
    cy.location('pathname').should('eq', '/');
  });
});
