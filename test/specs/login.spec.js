'use strict'

import { URL } from '../../constants/urls'
import { LoginPage } from '../pageobj/logIn.page'
import { FindFlightPage } from '../pageobj/findFlight.page'
import { TIMINGS } from '../../constants/timings'
import { VALID_USER, INCORRECT_INFO} from '../../constants/info'
import { openUrl, waitForPageLoad } from '../../src/helper'

const loginPage = new LoginPage()
const findFlightPage = new FindFlightPage()

const expect = require('chai').expect
let signInUrl

before('Redirect to sign in screen', () => {
    signInUrl = `${URL.BASE}${URL.SIGNIN}`
    openUrl(signInUrl,TIMINGS.PAGELOAD, false)
})

describe('Sign in validation', () => {
    it('should not be able to log in with empty credentials', () => {
        loginPage.submitButton.click()
        expect(driver.getUrl()).to.not.contain(URL.RESERVATION)
    })

    it('should not be able to log in with white spaces as credentials', () => {
        loginPage.logIn(INCORRECT_INFO.WHITESPACE, INCORRECT_INFO.WHITESPACE)
        expect(driver.getUrl()).to.not.contain(URL.RESERVATION)
    })

    it('should not log user in with correct username but incorrect password', () => {
        loginPage.logIn(VALID_USER.USERNAME, INCORRECT_INFO.NONEXISTENT)
        expect(driver.getUrl()).to.not.contain(URL.RESERVATION)
    })

    it('should not log in with incorrect username and correct password', () => {
        loginPage.logIn(INCORRECT_INFO.NONEXISTENT, VALID_USER.PASSWORD)
        expect(driver.getUrl()).to.not.contain(URL.RESERVATION)
    })

    it('should log user in with correct credentials', () => {
        loginPage.logIn(VALID_USER.USERNAME, VALID_USER.PASSWORD)
        waitForPageLoad(signInUrl,TIMINGS.PAGELOAD, true)
        expect(loginPage.usernameField.isDisplayed()).to.equal(false)
        expect(findFlightPage.findFlightForm.isDisplayed()).to.equal(true)
    })
});