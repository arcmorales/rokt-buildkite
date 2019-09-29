'use strict'

import { URL } from '../../constants/urls'
import { RegistrationPage } from '../pageobj/registration.page'
import { TIMINGS } from '../../constants/timings'
import { CONTACT_INFO, MAIING_INFO, USER_INFO} from '../../constants/info'
import { openUrl, waitForPageLoad } from '../../src/helper'

const registrationPage = new RegistrationPage()

const expect = require('chai').expect
let registerUrl

before('Redirect to registration screen', () => {
    registerUrl = `${URL.BASE}${URL.REGISTER}`
    openUrl(registerUrl,TIMINGS.PAGELOAD, false)
})

describe('Registration Screen', () => {
    it('should create the account', () => {
        registrationPage.firstNameField.setValue(CONTACT_INFO.FIRSTNAME)
        registrationPage.lastNameField.setValue(CONTACT_INFO.LASTNAME)
        registrationPage.phoneNumberField.setValue(CONTACT_INFO.PHONE)
        registrationPage.emailField.setValue(CONTACT_INFO.EMAIL)
        registrationPage.addressField.setValue(MAIING_INFO.ADDRESS)
        registrationPage.cityField.setValue(MAIING_INFO.CITY)
        registrationPage.stateField.setValue(MAIING_INFO.STATE)
        registrationPage.postalCodeField.setValue(MAIING_INFO.POSTAL_CODE)
        registrationPage.userNameField.setValue(USER_INFO.NAME)
        registrationPage.passwordField.setValue(USER_INFO.PASSWORD)
        registrationPage.confirmPasswordField.setValue(USER_INFO.PASSWORD)
        registrationPage.submitButton.click()
        waitForPageLoad(registerUrl,TIMINGS.PAGELOAD, true)
        expect(driver.getUrl()).to.contain(`${URL.BASE}${URL.CREATE_SUCCESS}`)
    })
});