import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payments } from "./classes/Payments.js";
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
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payments(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
// GENERICS
// USe generics to specify the type of value
let addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yoshi', age: 40 });
const docThree = {
    uid: 1,
    resourceName: "Kayode",
    data: { name: "Leo" }
};
const docFour = {
    uid: 2,
    resourceName: "May",
    data: ["Shawn"]
};
