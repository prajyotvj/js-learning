// There are 2 types of datatype

// 1. Primitive datatype:-
    //     1.String
    //     2. Number
    //     3. Boolean (true / false)
    //     4. null (iska matlab hai empty or zero nahi hai)
    //     5. undefined (aapne variable declare kardiya hai but usmein aap kya value dalenge aapne decide nahi kiya hai)
    //     6. Symbol (kisi bhi value ko unique banane ke liye use kiya jata hai)
    //     7. BigInt (jo badi values hoti hai oo hum BigInt mein use karte hai)

// 2. Reference type(Non primitive): Array, Objects, Functions
    // 1. Array ( [ ] )
    // 2. Object ( { } )
    // 3. Function ( function( ){ } )



const heros =["shaktiman","naagraj","doga"];  //Array 

let myObj={                                //object
    name:"prajyot",
    age:22,
}

const myFunction = function(){       // function
    console.log("Hello world");
}

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/


// MEMORY 
// Stack(Primitive)  , Heap(Non Primitive)

// i.e  primitive datatypes are stored in stack whereas as non primitive in Heap

let myYoutubename ="hiteshchoudharydotcom"

let anothername =myYoutubename
anothername ="chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
     email:"user@gmail.com",
     upi:"user@ybl"
}

let userTwo = userOne

 userTwo.email="hitesh@gmail.com" 

console.log(userOne.email);
console.log(userTwo.email);

