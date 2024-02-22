"use strict";
//const we use where value not change
//var value change every where
// let is a block scop
const num = 5;
const num1 = 33;
const ac = "best";
if (false) {
    let num2 = 7; // let is a block scope only print inside if statment
    // console.log(num2);
}
else {
    console.log(num);
}
//console.log(num2);//error because it's not defined in this scope
