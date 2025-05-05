"use strict";
{
    const owner = "bike";
    console.log(owner);
    const getPropertyValue = (obj, key) => {
        return obj[key];
    };
    const user = {
        name: "Tamim",
        age: 28,
        address: "ctg"
    };
    const result1 = getPropertyValue(user, "name");
    console.log(result1);
    //
}
