import { t, Selector} from 'testcafe'

class Home{

    constructor(){
        this.loginButton = Selector ('a').withText('Iniciar sesión')
    }

    clickLogin = async() => {
        await t
            .click(this.loginButton)
            // .wait(4000)
    }
}

export default new Home()
