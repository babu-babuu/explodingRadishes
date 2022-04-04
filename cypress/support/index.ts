// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
/// <reference types="cypress" />
declare global {
    namespace Cypress {
      interface Chainable {
        /**
         * Custom command to select DOM element by data-cy attribute.
         * @example cy.dataCy('greeting')
         */
        dataCy(value: string): Chainable<Element>
        navigateToUrl(url: string): Chainable<Element>
        enterValue(location: string, value: string): Chainable<Element>
        validateText(location: string, value: string): Chainable<Element>
        validateNumberOfElements(location: string, value: number): Chainable<Element>
        checkGivenElement(location: string): Chainable<Element>
        validateElementIsChecked(location: string, value: string): Chainable<Element>
      }
    }
  }
