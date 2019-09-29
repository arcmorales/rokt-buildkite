'use strict'

import Page from './page'

export class RegistrationPage extends Page { 

   get registrationForm () {
    return $(`form[action="mercurycreate_account.php"]`)
   }
   
   get firstNameField () {
    return $(`input[name="firstName"]`)
   }

   get lastNameField () {
    return $(`input[name="lastName"]`)
   }

   get phoneNumberField () {
    return $(`input[name="phone"]`)      
   }

   get emailField () {
    return $(`input#userName`)      
   }

   get addressField () {
    return $(`input[name="address1"]`)      
   }

   get cityField () {
    return $(`input[name="city"]`)      
   }

   get stateField () {
    return $(`input[name="state"]`)      
   }

   get postalCodeField () {
    return $(`input[name="postalCode"]`)      
   }

   get userNameField () {
    return $(`input#email`)
   }

   get passwordField () {
    return $(`input[name="password"]`)
   }

   get confirmPasswordField () {
    return $(`input[name="confirmPassword"]`)
   }

   get submitButton () {
    return $(`input[name="register"]`)
   }
}
