/// <reference types="cypress" />

describe('Home Page', () => {
  it('should have sign in button', () => {
    cy.visit('/');
    cy.contains('Sign In').should('be.visible');
  });

  it('should redirect if sign in button is pressed', () => {
    cy.visit('/');
    cy.contains('Sign In').should('be.visible').click();
    cy.location('pathname').should('eq', '/login');
  });
});
