const { openBrowser, closeBrowser, goto } = require('taiko')

module.exports = {
    setup: async() => {
        await openBrowser({ headless: false})
        await goto('https://www.saucedemo.com')        
    },
    teardown: async () => {
        await closeBrowser()        
    }
}