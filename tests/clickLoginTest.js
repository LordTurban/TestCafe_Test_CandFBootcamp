import Home from '../pages/home'

fixture `Go to Login page`.page(`https://todoist.com/es`)

test(`Create a new task`, async t =>{
    await Home.clickLogin()
    
})
