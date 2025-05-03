"use strict";
// Function in ts
//Normal Function
function add(num1, num2) {
    return num1 + num2;
}
add(2, 2);
const addArrow = (num1, num2) => {
    return num1 + num2;
};
//object -->function -->method
const poorUSer = {
    name: "Tamim",
    balance: 0,
    addBalance(balance) {
        return `My new Balance is ${this.balance + balance}`;
    },
};
console.log(poorUSer.addBalance(2));
const arr = [2, 4, 6];
const newArr = arr.map((element) => element * element);
console.log(newArr);
