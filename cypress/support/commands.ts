Cypress.Commands.add('navigateToUrl', (url: string) => {
    cy.visit(url)
})

Cypress.Commands.add('enterValue', (location: string, value: string) => {
  cy.xpath(location).clear().type(`${value}{enter}`)
})

Cypress.Commands.add('validateText', (location: string, value: string) => {
  cy.xpath(location).should('have.text', value)
})

Cypress.Commands.add('validateNumberOfElements', (location: string, value: number) => {
  cy.xpath(location).children().should('have.length', value)
})

Cypress.Commands.add('checkGivenElement', (location: string) => {
  cy.xpath(location).click()
})

Cypress.Commands.add('validateElementIsChecked', (location: string, value: string) => {
  cy.xpath(location).should('have.class', value)
})
