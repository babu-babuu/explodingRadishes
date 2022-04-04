import items from '../fixtures/items.json'
import selectors from '../support/selectors'
import {getNoteId} from '../support/functions'

const idFirstNote = getNoteId()
const idSecondNote = getNoteId()
const localHost = `[{"title": "${items.TODO_ITEM_ONE}","completed":false,"id":${idFirstNote}},{"title":"${items.TODO_ITEM_TWO}","completed":false,"id": ${idSecondNote}}]`

describe('checks a note and validate it is marked as completed', () => {
    it('navigates to the page, checks the box and vlaidates the note is completed', () => {
        cy.navigateToUrl('/')
        localStorage.setItem('todos-vanillajs', localHost)
        cy.checkGivenElement(selectors.noteCheckbox(1))
        cy.validateElementIsChecked(selectors.noteWrapper(1), 'completed')
        cy.validateElementIsChecked(selectors.noteWrapper(2), '')
    })
})
