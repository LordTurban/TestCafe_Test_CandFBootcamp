import { t, Selector } from 'testcafe'

class Dashboard {

    constructor() {
        this.searchBar = Selector('#quick_find')
        this.newTaskButton = Selector('.plus_add_button')
        this.inputPlaceholder = Selector('.public-DraftEditorPlaceholder-root')
        this.newTaskTextInput = Selector('.public-DraftStyleDefault-block')
        this.calendarDueDateButton = Selector('.item_due_selector')
        this.tomorrowSuggestionButton = Selector('button').withAttribute('data-track', 'scheduler|date_shortcut_tomorrow')
        this.submitTaskButton = Selector('.ist_button')
        this.inboxButton = Selector('#filter_inbox')
    }

    newTaskProcess = async () => {
        await t            
            .click(this.newTaskButton)
            .click(this.inputPlaceholder)            
            .typeText(this.newTaskTextInput, 'New Task', {paste:true})
            .click(this.calendarDueDateButton)
            .click(this.tomorrowSuggestionButton)
            .click(this.submitTaskButton)
            .click(this.inboxButton)
            .wait(5000)
    }
}

export default new Dashboard()