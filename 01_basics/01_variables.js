
const accountId = 15993   // to declared the constant
let accountEmail ="prajyot@gmail.com" 
var accountPassword ="1234"
accoutCity = "Nashik"
let accountState;

// accountId = 34232 // Note allowed as we can assigned the new value to "const"

// this can be done.
accountEmail ="jadhav@gmail.com"
accountPassword="4321"
accoutCity="Sambhajinagar"

/*
Perfer not to use var 
because of issue inn block scope and functional scope
rather use "let"
*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accoutCity,accountState])