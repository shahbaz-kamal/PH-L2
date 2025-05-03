"use strict";
//destructuring
const profile = {
    id: 342,
    name: {
        firstName: "Tamim",
        lastName: "Kamal",
        middleName: "Chowdhury",
    },
    contactNumber: 1799839985,
    address: "Dhaka",
};
const { id, name: { middleName: obvious }, address, } = profile;
console.log(id, obvious, address);
//   array destructuring
const myFriends = ["chandler", "Monica", "Ross", "joye", "pheobe"];
const [, , bestFriend, ...rest] = myFriends;
console.log(bestFriend);
