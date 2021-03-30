import Home from '../pages/home'
import Login from '../pages/login'
import Dashboard from '../pages/dashboard'
// Import from the json file //
const testData = require('../utils/testData.json')

fixture `Login Test`.page(`https://todoist.com/es`)

test(`Show me an error in login process`, async t =>{
    await Home.clickLogin()
    await Login.loginProcess(testData.valid_email, testData.valid_password);
    await t.expect(Dashboard.searchBar.exists).ok()
})
