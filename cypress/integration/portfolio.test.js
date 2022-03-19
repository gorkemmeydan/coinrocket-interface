/// <reference types="cypress" />

describe('Portfolio', () => {
  beforeEach(() => {
    cy.visit('/login');
    cy.get('input[name="email"]').type('test@test.com');
    cy.get('input[name="password"]').type('123456');
    cy.get('button').click();
    cy.location('pathname').should('eq', '/app/dashboard');
    cy.get('[class^="PanelItemstyled__PanelItemWrapper"]').eq(1).click();
    cy.location('pathname').should('eq', '/app/portfolio');
  });

  it('should show elements', () => {
    cy.get('[class^="PortfolioStatsstyled__PortFolioStatsWrapper"]').should(
      'be.visible'
    );
    cy.get('[class^="PortfolioContentstyled__HorizontalScrollable"]').should(
      'be.visible'
    );
    cy.get('[class^="PortfolioTablestyled__PortofolioTableWrapper"]').should(
      'be.visible'
    );
  });

  it('should toggle hidden data', () => {
    cy.get('[class^="PortfolioStatsstyled__TextField"]')
      .eq(2)
      .should('have.text', '*********');
    cy.get('[class^="PortfolioStatsstyled__HidePortfolioButton"]').click();
    cy.get('[class^="PortfolioStatsstyled__TextField"]').should(
      'have.length',
      2
    );
    cy.get('[class^="PortfolioStatsstyled__ColoredText"]').should('be.visible');

    cy.get('[class^="PortfolioStatsstyled__HidePortfolioButton"]').click();
    cy.get('[class^="PortfolioStatsstyled__TextField"]')
      .eq(2)
      .should('have.text', '*********');
  });

  it('should be able to add new coin', () => {
    cy.get('[class^="CoinCardRowstyled__RowDataWrapper"]').should(
      'have.length',
      1
    );
    cy.get('[class^="PortfolioStatsstyled__AddNewCoinButton"]')
      .should('be.visible')
      .click();
    cy.get('[class^="Modalstyled"]').should('be.visible');
    cy.get('input').type('ether{enter}');
    cy.get(
      '[class^="AddToPortfolioContentstyled__AddToPortfolioButton"]'
    ).click();
    cy.get('[class^="Modalstyled"]').should('not.exist');
    cy.get('[class^="CoinCardRowstyled__RowDataWrapper"]').should(
      'have.length',
      2
    );
  });

  it('should not add new coin if coin is already in portfolio', () => {
    cy.get('[class^="CoinCardRowstyled__RowDataWrapper"]').should(
      'have.length',
      1
    );
    cy.get('[class^="PortfolioStatsstyled__AddNewCoinButton"]')
      .should('be.visible')
      .click();
    cy.get('[class^="Modalstyled"]').should('be.visible');
    cy.get('input').type('bitcoin{enter}');
    cy.get(
      '[class^="AddToPortfolioContentstyled__AddToPortfolioButton"]'
    ).click();
    cy.get('[class^="AddToPortfolioContentstyled__ErrorText"]').should(
      'be.visible'
    );
  });

  xit('should be able to open transacion details and remove transaction', () => {
    cy.get(
      '[class^="TransactionHistoryButtonstyled__ShowTransactionsButton"]'
    ).click();
    cy.get('[class^="Modalstyled"]').should('be.visible');
    cy.get(
      '[class^="TransactionHistoryTablestyled__TransactionHistoryTableWrapper"]'
    ).should('be.visible');
    cy.get(
      '[class^="TransactionHistoryTablestyled__DeleteTransactionButton"]'
    ).click();
    cy.get('[class^="TransactionHistoryTablestyled__DropDownContent"]').click();
  });

  xit('should be able to add new transacion', () => {
    cy.get(
      '[class^="TransactionHistoryButtonstyled__ShowTransactionsButton"]'
    ).click();
    cy.get('[class^="TransactionHistoryTablestyled__RowDataWrapper"]').should(
      'have.length',
      1
    );
    cy.get('[class^="Modalstyled__CloseModalButton"]').click();

    cy.get(
      '[class^="AddTransactionButtonstyled__AddTransactionButtonWrapper"]'
    ).click();
    cy.get('[class^="Modalstyled"]').should('be.visible');
    cy.get('[type="number"]').type('0.02');
    cy.get('[class^="CoinDetailsFormstyled__NextButton"]').eq(1).click();
    cy.get("[type='submit']").click();
    cy.get('[class^="Modalstyled"]').should('not.exist');

    cy.get(
      '[class^="TransactionHistoryButtonstyled__ShowTransactionsButton"]'
    ).click();
    cy.get('[class^="TransactionHistoryTablestyled__RowDataWrapper"]').should(
      'have.length',
      2
    );
  });

  xit('should be able to remove coin from portfolio', () => {
    cy.get('[class^="DeleteDropdownButtonstyled__DropdownButton"]').click();
    cy.get('[class^="DeleteDropdownButtonstyled__DropDownContent"]').click();
    cy.get('[class^="TransactionHistoryTablestyled__RowDataWrapper"]').should(
      'not.exist'
    );
  });
});
