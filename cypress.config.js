const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    "chromeWebSecurity": false,
    "defaultCommandTimeout": 20000,
    "execTimeout": 60000,
    "pageLoadTimeout": 60000,
    "requestTimeout": 15000,
    "responseTimeout": 15000,
    "video": false,
    "failOnStatusCode": false,
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
