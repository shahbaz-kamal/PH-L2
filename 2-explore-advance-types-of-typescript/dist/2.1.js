"use strict";
let value = "Hello";
let lengthOfValue = value.length;
console.log(lengthOfValue);
const kgToGm = (value) => {
    if (typeof value === "string") {
        const convertedValue = parseFloat(value) * 1000;
        return convertedValue;
    }
    if (typeof value === "number") {
        const convertedValue = value * 1000;
        return convertedValue;
    }
};
const result1 = kgToGm(1);
const result2 = kgToGm("1.2");
console.log("Number :", { result1 });
console.log("String :", { result2 });
