let score = "33"

console.log(typeof score);  // will print string 
console.log(typeof(score)); // will print string


let valueInNumber = Number(score)  // conversion to Number.

console.log(typeof valueInNumber);
console.log(valueInNumber);  


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn) // conversion too boolean value
console.log(booleanIsLoggedIn); // will print true.


let someNumber = 33

let stringNumber = String(someNumber) // conversion to string
console.log(typeof stringNumber);   // output: string
console.log(stringNumber);          // output: 33 ->string


//*************************Operations******************************/

let value = 3
let negValue = -value
console.log(negValue)

// console.log((2+2));
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 ="hello"
let str2 =" prajyot"

let str3 =str1+str2  // concatenation
console.log(str3);   // output: hello prajyot


let num = 100;
console.log(++num);  // pre-increment
console.log(num++);  // post-increment

