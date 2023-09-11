describe('test almusafer website', () => {
  it('test the arabic webpage', () => {
    cy.visit('https://www.almosafer.com/ar')
    cy.get('.cta__continue').click()
    cy.get('[data-testid="Header__LanguageSwitch"]').invoke('text').should('eq', 'English')
    cy.wait(2000)
    cy.get('[data-testid="Header__CurrencySelector"]').should('have.text', 'SAR ')
    cy.get('#uncontrolled-tab-example-tab-flights').should(($element) => {
      expect($element).to.have.attr('aria-selected', 'true');
    });
  })
})