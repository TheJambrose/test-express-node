const names = require('./04-names.js');
const sayHi = require('./05-utils');
const data = require('./06-alternative-flavor');
const bobPerson = data.singlePerson;
require('./07-mind-grenade')

sayHi('Susan');
sayHi(names.john);
sayHi(names.peter);

bobPerson.loveInterest = "Jamie";
console.log(bobPerson);
