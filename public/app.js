"use strict";
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice("mario", "for shopping", 500);
const invTwo = new Invoice("luigi", "for bank", 50);
let invoices = [];
invoices.push(invOne, invTwo);
console.log(invoices);
const anchor = document.querySelector('a');
console.log(anchor.href);
// Use "!" for the element to not be null  
const form = document.querySelector('.new-item-form');
console.log(form.children);
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
