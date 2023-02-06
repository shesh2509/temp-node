// CommonJS, every file is module (by default)
// MODULES - Encapsulated code (only share minimum)
const names = require('./4-names')
// console.log(names)

const sayHi = require('./5-utils')
// console.log(sayHi)

const data = require('./6-alternative-flavor')
// console.log(require('./6-alternative-flavor'))   // -> another way

require('./7-mind-grenade')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)