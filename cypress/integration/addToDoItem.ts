import items from '../fixtures/items.json'
import selectors from '../support/selectors'

describe('adds given notes and validates the state', () => {
    it('navigates to the page, adds two notes and validates them', () => {
      cy.navigateToUrl('/')
      cy.fixture('items').as('items')
      cy.enterValue(selectors.inputField, items.TODO_ITEM_ONE)
      cy.enterValue(selectors.inputField, items.TODO_ITEM_TWO)
      cy.validateText(selectors.noteRow(1), items.TODO_ITEM_ONE)
      cy.validateText(selectors.noteRow(2), items.TODO_ITEM_TWO)
      cy.validateNumberOfElements(selectors.noteBulk, 2)
  })
})
