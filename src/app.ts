import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payments } from "./classes/Payments.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

// const invOne = new Invoice("mario", "for shopping", 500);
// const invTwo = new Invoice("luigi", "for bank", 50);

// let invoices: Invoice[] = [];
// invoices.push(invOne, invTwo);

// invoices.forEach(invoice => {
//     console.log(`${invoice.format()}`)
// })


// interfaces
// interface isPerson {
//     name: string;
//     age: number;
//     speak(a: string) : void;
//     spend(b: number) : number;
// }

// const me: isPerson = {
//     name: "shaun",
//     age: 30,
//     speak(text: string) : void {
//         console.log(text)
//     },
//     spend(amount: number) : number {
//         console.log("I spent", amount);
//         return amount;
//     }
// };

// const greetPerson = (person: isPerson) => { 
//     console.log('hello', person.name)
// };
// greetPerson(me);

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice("mrio", "web work", 345);
// docTwo = new Payments("yo", "jump work", 505);


//DOM

// const anchor = document.querySelector('a')!;
// console.log(anchor.href);
// Use "!" for the element to not be null  

const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let doc: HasFormatter;

    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payments(toFrom.value, details.value, amount.valueAsNumber);
    }

    list.render(doc, type.value, "end")
})

// GENERICS
// Use generics to specify the type of value
let addUID = <T extends{ name: string }>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid };
};

let docOne = addUID({ name: 'yoshi', age: 40 });

//enums
// use enums to set default values for items or elements
enum ResourceType { BOOK, AUTHOR, PERSON, CAST }

// with interfaces
interface Resource<T> {
    uid: number;
    resourceName: number;
    data: T;
}

const docThree: Resource<object> = {
    uid: 1,
    resourceName: ResourceType.BOOK, // 0
    data: { name: "Leo" }
}

const docFour: Resource<string[]> = {
    uid: 2,
    resourceName: ResourceType.PERSON, // 2
    data: ["Shawn"]
}