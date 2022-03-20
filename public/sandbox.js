"use strict";
// const character = "luigi";
// console.log(character);
// const circle = (diameter: number) => {
//     return diameter * Math.PI
// }
// console.log(circle(7.5));
// Arrays
// let names = ['luigi', 'mario', 'yoshi']
// names.push('super')
// // Objects
// let obj = {
//     name: 'mario',
//     age: 23,
//     adult: true
// }
// obj.age = 50;
// explicit types 
let character;
let age;
let isFalse;
// arrays
let names = []; // define the type and set it to a defualt value
//union types
let mixed = []; // to use multiple types in an array
let uid;
// objects
let obj1;
let obj2;
let obj3;
// any
let anyName; // setting the varaible to have any type
let mixedNames = [];
mixedNames.push("Kay");
mixedNames.push(false);
mixedNames.push(3);
// console.log(mixedNames);
let mixedObject;
// Functions
let func;
func = () => {
    // console.log("function")
};
const add = (a, b) => {
    // console.log(a + b);
};
add(5, 10);
const addOptional = (a, b, c) => {
    // console.log(a + b);
    // c is optional when "?" is used  
};
addOptional(5, 15);
const returnValue = (a, b) => {
    return a + b;
};
let result = returnValue(10, 25);
const greet = (uid, item) => {
    console.log(`${item} has a ${uid}`);
};
const greetAgain = (user) => {
    console.log(`${user.name} is present`);
};
// Function Signatures
let toGreet;
toGreet = (name, greeting) => {
    console.log(`${name} sends ${greeting}`);
};
let calc;
calc = (num1, num2, action) => {
    if (action === "add") {
        return num1 + num2;
    }
    else {
        return num1 - num2;
    }
};
let logDetails;
logDetails = (ninja /*{ name: string, age: number }*/) => {
    console.log(`${ninja.name} is ${ninja.age}`);
};
