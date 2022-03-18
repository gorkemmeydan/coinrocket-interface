/// <reference types="cypress" />

describe('Dashboard', () => {
  beforeEach(() => {
    cy.visit('/login');
    cy.get('input[name="email"]').type('test@test.com');
    cy.get('input[name="password"]').type('123456');
    cy.get('button').click();
    cy.location('pathname').should('eq', '/app/dashboard');
  });

  it('should show elements', () => {
    cy.get('[class^="FavoriteItems"]').should('have.length', 3);
    cy.get('[class^="TrendingItem"]').should('have.length', 28);
    cy.get('[class^="PortfolioOverview"]').should('be.visible');
    cy.get('[class^="MiniNewsItem"]').should('have.length', 9);
  });

  it('should add show error msg id new watchlist element is already present', () => {
    cy.contains('Click to add new coin to watch').eq(0).click();
    cy.get('[class^="Modalstyled"]').should('be.visible');
    cy.get('input').type('ether{enter}');
    cy.get(
      '[class^="AddToWatchlistContentstyled__AddToWatchlistButton"]'
    ).click();
    cy.contains('Coin already exists in your watchlist').should('be.visible');
  });

  it('should add show error msg id new watchlist element is already present', () => {
    cy.contains('Click to add new coin to watch').eq(0).click();
    cy.get('[class^="Modalstyled"]').should('be.visible');
    cy.get('input').type('bitcoin{enter}');
    cy.get(
      '[class^="AddToWatchlistContentstyled__AddToWatchlistButton"]'
    ).click();
    cy.get('[class^="FavoriteItemstyled__IconAndButtonWrapper"]').should(
      'have.length',
      2
    );
  });

  it('should replace with add button if watchlist element is deleted', () => {
    cy.get('[class^="ButtonWithDropdownstyled__DropdownButton"]')
      .should('be.visible')
      .click();
    cy.get('[class^="ButtonWithDropdownstyled__DropDownContent"]')
      .should('be.visible')
      .click();
    cy.get('[class^="FavoriteItemstyled__AddToWatchlistButton"]').should(
      'have.length',
      3
    );
  });
});
