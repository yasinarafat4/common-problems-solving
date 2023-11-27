// Scope determines the accessibility (visibility) of variables.

// JavaScript has 3 types of scope:
// 1. Block scope
// 2. Function scope
// 3. Global scope

/* 1. Block scope: 
 ES6 introduced two important new JavaScript keywords: "let" and "const". These two keywords provide Block Scope in JavaScript.

- Variables declared inside a { } block that cannot be accessed from outside the block:
*/
{
  let x = 2;
  const y = 3;
}

//-------------------------------------------------

/* 2. Function scope
- Variables defined inside a function are not accessible (visible) from outside the function.
*/
function myFunction() {
    var carName = "Volvo"; 
    console.log(carName); // Can only be accessed from within the function
}
// console.log(carName); //can not be accessed from outside the function

//-------------------------------------------------

/* 3. Global scope

- Global variables defined with the "var" keyword. In HTML, it is the window object.
- The visibility of variables across the entire program. 
*/
var person = "Yasin"; // can use window.carName
let person = "Yasin"; // can not use window.carName

