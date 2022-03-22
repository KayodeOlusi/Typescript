import { Invoice } from "./classes/Invoice.js";

const invOne = new Invoice("mario", "for shopping", 500);
const invTwo = new Invoice("luigi", "for bank", 50);

let invoices: Invoice[] = [];
invoices.push(invOne, invTwo);

invoices.forEach(invoice => {
    console.log(`${invoice.format()}`)
})


// interfaces
interface isPerson {
    name: string;
    age: number;
    speak(a: string) : void;
    spend(b: number) : number;
}

const me: isPerson = {
    name: "shaun",
    age: 30,
    speak(text: string) : void {
        console.log(text)
    },
    spend(amount: number) : number {
        console.log("I spent", amount);
        return amount;
    }
};

const greetPerson = (person: isPerson) => { 
    console.log('hello', person.name)
}

greetPerson(me)

//DOM

const anchor = document.querySelector('a')!;
// console.log(anchor.href);
// Use "!" for the element to not be null  

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber
    )
})