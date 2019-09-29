'use strict'

import Page from './page'

export class LoginPage extends Page { 

    get usernameField () {
        return $(`input[name="userName"]`)
    }

    get passwordField () {
        return $(`input[name="password"]`)
    }

    get submitButton () {
        return $(`input[value="Login"]`)
    }

    get registrationLink () {
        return $('*=mercuryregister.php')
    }

    logIn (username, password) {
        this.usernameField.setValue(username)
        this.passwordField.setValue(password)
        this.submitButton.click()
    }
}


