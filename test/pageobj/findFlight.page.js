'use strict'

import Page from './page'

export class FindFlightPage extends Page { 

    get findFlightForm () {
        return $(`form[name="findflight"]`)
    }

}


