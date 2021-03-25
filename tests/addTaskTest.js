import Home from '../pages/home'
import Login from '../pages/login'
import Dashboard from '../pages/dashboard'
import TasksInbox from '../pages/tasksInbox'

fixture `Add new task`.page(`https://todoist.com/es`)

test(`Add new task`, async t =>{
    await Home.clickLogin()
    await Login.loginProcessQuick()
    // await t.expect(Dashboard.searchBar.exists).ok()
    await Dashboard.newTaskProcess()
    await t.expect(TasksInbox.taskItem.exists).ok()
})