import { t, Selector} from 'testcafe'

class Login{

    constructor(){
        this.emailField = Selector ('#email')
        this.passwordField = Selector ('#password')
        this.loginButton = Selector ('.submit_btn')
        this.signupButton = Selector ('a').withAttribute('href', '/Users/showRegister')
        this.errorMessage = Selector ('.error_msg')
    }

    loginProcess = async() => {
        await t
            .typeText(this.emailField, 'myuser')
            .typeText(this.passwordField, 'mypassword')
            .click(this.loginButton)
            .wait(20000)
    }

    loginProcessQuick = async () => {
        await t
            .typeText(this.emailField, 'myuser')
            .typeText(this.passwordField, 'mypassword')
            .click(this.loginButton)        
    }
}

export default new Login()
