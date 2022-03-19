/// <reference types="cypress" />

describe('News', () => {
  beforeEach(() => {
    cy.visit('/login');
    cy.get('input[name="email"]').type('test@test.com');
    cy.get('input[name="password"]').type('123456');
    cy.get('button').click();
    cy.location('pathname').should('eq', '/app/dashboard');
    cy.get('[class^="PanelItemstyled__PanelItemWrapper"]').eq(3).click();
    cy.location('pathname').should('eq', '/app/news');
  });

  it('should show elements', () => {
    cy.get('[class^="NewsContentstyled__Title"]').should('be.visible');
    cy.get('[class^="NewsContentstyled__HorizontalScrollable"]').should(
      'be.visible'
    );
    cy.get('[class^="NewsItemContainerstyled__NewsItemWrapper"]').should(
      'exist'
    );
  });

  it('should show detailed news modal if news item is clicked', () => {
    cy.get('[class^="NewsItemContainerstyled__NewsTitleDataWrapper"]')
      .eq(0)
      .click(0);
    cy.get('[class^="Modalstyled__ModalWrapper"]').should('be.visible');
  });
});
