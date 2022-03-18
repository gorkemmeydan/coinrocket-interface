/// <reference types="cypress" />

describe('Portfolio', () => {
  beforeEach(() => {
    cy.visit('/login');
    cy.get('input[name="email"]').type('test@test.com');
    cy.get('input[name="password"]').type('123456');
    cy.get('button').click();
    cy.location('pathname').should('eq', '/app/dashboard');
    cy.get('[class^="PanelItemstyled__PanelItemWrapper"]').eq(2).click();
    cy.location('pathname').should('eq', '/app/market');
  });

  it('should show elements', () => {
    cy.get('[class^="Marketstyled__Title"]').should('be.visible');
    cy.get('[class^="MarketTablestyled__MarketTableWrapper"]').should(
      'be.visible'
    );
    cy.get('[class^="CoinCardRowstyled__RowDataWrapper"]').should(
      'have.length',
      100
    );
  });
});
