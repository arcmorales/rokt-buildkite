'use strict'

export const openUrl = (url, delay, reverse) => {
    driver.url(url)
    waitForPageLoad(url, delay, reverse)
}

export const waitForPageLoad = (url, delay, reverse) => {
    driver.waitUntil(() =>{
        if(reverse) {
            return driver.getUrl() !== url
        } else {
            return driver.getUrl() === url
        }
    }, delay)
}