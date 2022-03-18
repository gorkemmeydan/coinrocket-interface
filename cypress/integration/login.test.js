/// <reference types="cypress" />

describe('Login Page', () => {
  it('should show error when email is not valid', () => {
    cy.visit('/login');
    cy.get('input[name="email"]').type('xx').blur();
    cy.contains('email must be a valid email').should('be.visible');
  });

  it('should show error when password is too short', () => {
    cy.visit('/login');
    cy.get('input[name="email"]').type('test@test.com');
    cy.get('input[name="password"]').focus().blur();
    cy.contains('No password provided.').should('be.visible');
  });

  it('should show email and password error if login button is clicked without arguments', () => {
    cy.visit('/login');
    cy.get('button').click();
    cy.contains('Required').should('be.visible');
    cy.contains('No password provided.').should('be.visible');
  });

  it('should redirect if login is successfull', () => {
    cy.visit('/login');
    cy.get('input[name="email"]').type('test@test.com');
    cy.get('input[name="password"]').type('123456');
    cy.get('button').click();
    cy.location('pathname').should('eq', '/app/dashboard');
  });

  it('should redirect if sign up is clicked', () => {
    cy.visit('/login');
    cy.contains('Sign up').should('be.visible').click();
    cy.location('pathname').should('eq', '/signup');
  });
});
