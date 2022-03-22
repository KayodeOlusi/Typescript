import { Invoice } from "./classes/Invoice.js";
import { Payments } from "./classes/Payments.js";
const invOne = new Invoice("mario", "for shopping", 500);
const invTwo = new Invoice("luigi", "for bank", 50);
let invoices = [];
invoices.push(invOne, invTwo);
invoices.forEach(invoice => {
    console.log(`${invoice.format()}`);
});
const me = {
    name: "shaun",
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("I spent", amount);
        return amount;
    }
};
const greetPerson = (person) => {
    console.log('hello', person.name);
};
greetPerson(me);
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice("mrio", "web work", 345);
// docTwo = new Payments("yo", "jump work", 505);
//DOM
const anchor = document.querySelector('a');
// console.log(anchor.href);
// Use "!" for the element to not be null  
const form = document.querySelector('.new-item-form');
// console.log(form.children);
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payments(toFrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
