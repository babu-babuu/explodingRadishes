Cypress.Commands.add('navigateToUrl', (url) => {
    cy.visit(url)
})

Cypress.Commands.add('enterValue', (location, value) => {
  cy.xpath(location).clear().type(`${value}{enter}`)
})

Cypress.Commands.add('validateText', (location, value) => {
  cy.xpath(location).should('have.text', value)
})

Cypress.Commands.add('validateNumberOfElements', (location, value) => {
  cy.xpath(location).children().should('have.length', value)
})

Cypress.Commands.add('checkGivenElement', (location) => {
  cy.xpath(location).click()
})

Cypress.Commands.add('validateElementIsChecked', (location, value) => {
  cy.xpath(location).should('have.class', value)
})
