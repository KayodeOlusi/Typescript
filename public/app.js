"use strict";
class Invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        // this.client = c;
        // this.details = d;
        // this.amount = a;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice("mario", "for shopping", 500);
const invTwo = new Invoice("luigi", "for bank", 50);
let invoices = [];
invoices.push(invOne, invTwo);
invoices.forEach(invoice => {
    console.log(`${invoice.format()}`);
});
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
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
