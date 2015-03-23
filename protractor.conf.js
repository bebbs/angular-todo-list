exports.config = {
  baseUrl: 'http://localhost:8080',
  chromeOnly: true,
  chromeDriver: './node_modules/protractor/selenium/chromedriver',
  capabilities: {
    'browserName': 'chrome'
  },
  specs: ['spec/e2e/**/*.js'],
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};