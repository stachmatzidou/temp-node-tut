//CommonJS, every file is module (by default)
//Modules - Encapsulated Code (only share minimum)

// const names = require('./4-names');
// console.log(names);

// const sayHi = require('./5-utils')

// sayHi('Sofia');
// sayHi(names.john);
// sayHi(names.peter);


//OR I CAN USE OBJECT DESTRUCTURING
const {john, peter} = require('./4-names');
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor');

require('./7-mind-grenade')
sayHi('Sofia');
sayHi(john);
sayHi(peter);