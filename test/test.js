const AutoVersion = require('../lib/main.js')

const version = AutoVersion.getVersion()
console.log(version)
// const newVersion = AutoVersion.minor(version)
// AutoVersion.setVersion(__dirname, newVersion)
// console.log(newVersion)