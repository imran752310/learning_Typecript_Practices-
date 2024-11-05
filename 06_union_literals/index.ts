// Union Titerals 
// 1. Write a union type that represents the set of all possible values for an HTML element's id attribute. 
type Id = string | number;

let myId: Id = "myElement";
let myAb: Id = 234;

console.log(myId); // Output: myElement
console.log(myAb); // Output: myElement