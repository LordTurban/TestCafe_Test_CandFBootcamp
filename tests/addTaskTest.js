import Home from '../pages/home'
import Login from '../pages/login'
import Dashboard from '../pages/dashboard'
import TasksInbox from '../pages/tasksInbox'
// Import from the json file //
const testData = require('../utils/testData.json')

fixture `Add new task`.page(`https://todoist.com/es`)

test(`Add new task`, async t =>{
    await Home.clickLogin()
    await Login.loginProcess(testData.user)
    // await t.expect(Dashboard.searchBar.exists).ok()
    await Dashboard.newTaskProcess()
    await t.expect(TasksInbox.taskItem.exists).ok()
})