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
let character: string;
let age: number;
let isFalse: boolean;

// arrays
let names: string[] = []; // define the type and set it to a defualt value

//union types
let mixed: (string|number|boolean)[] = []; // to use multiple types in an array
let uid: string|number;

// objects
let obj1: {}
let obj2: object;

let obj3: {
    name: string,
    age: number,
    isAdult: boolean
}

// any

let anyName: any; // setting the varaible to have any type

let mixedNames: any[] = [];
mixedNames.push("Kay");
mixedNames.push(false);
mixedNames.push(3);


let mixedObject: { name: any, age: any }

