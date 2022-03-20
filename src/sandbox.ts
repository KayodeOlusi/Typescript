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
// console.log(mixedNames);


let mixedObject: { name: any, age: any }


// Functions

let func: Function;

func = () => {
    // console.log("function")
}

const add = (a: number, b: number) => {
    // console.log(a + b);
}

add(5, 10);

const addOptional = (a: number, b: number, c?: string|number|boolean) => {
    // console.log(a + b);
    // c is optional when "?" is used  
}

addOptional(5, 15);

const returnValue = (a: number, b: number) : number => {
    return  a + b;
};

let result = returnValue(10, 25);


// type alias
// define the type and assign it to a variable
type StringOrNum = string | number;
type objWithName = { name: string, uid: StringOrNum };

const greet = (uid: StringOrNum, item: string) => {
    console.log(`${item} has a ${uid}`);
};

const greetAgain = (user: objWithName) => {
    console.log(`${user.name} is present`);
};

// Function Signatures
let toGreet: (a: string, b: string) => void;

toGreet = (name: string, greeting: string) => {
    console.log(`${name} sends ${greeting}`)
};

let calc: (a: number, b: number, c: string) => number;

calc = (num1: number, num2: number, action: string) => {
    if (action === "add") {
        return num1 + num2;
    } else {
        return num1 - num2;        
    }
}

let logDetails: (obj: { name: string, age: number }) => void;

type person = { name: string, age: number }

logDetails = (ninja: person /*{ name: string, age: number }*/) => {
    console.log(`${ninja.name} is ${ninja.age}`);
}



