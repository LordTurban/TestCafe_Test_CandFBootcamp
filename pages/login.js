import { t, Selector } from 'testcafe'

class Login{

    constructor(){
        this.emailField = Selector ('#email')
        this.passwordField = Selector ('#password')
        this.loginButton = Selector ('.submit_btn')
        this.signupButton = Selector ('a').withAttribute('href', '/Users/showRegister')
        this.errorMessage = Selector ('.error_msg')
    }

    loginProcess = async(credentials) => {
        await t
            .typeText(this.emailField, credentials.valid_email, {paste:true})
            .typeText(this.passwordField, credentials.valid_password, {paste:true})
            .click(this.loginButton)
            .wait(2000)
    }

    loginProcessQuick = async () => {
        await t
            .typeText(this.emailField, 'myuser')
            .typeText(this.passwordField, 'mypassword')
            .click(this.loginButton)        
    }
}

export default new Login()
