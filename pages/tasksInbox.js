import { t, Selector } from 'testcafe'

class TasksInbox {

    constructor() {
        this.taskList = Selector('.section_list')
        this.taskItem = Selector('li').child('.section')
    }



}

export default new TasksInbox()