"use strict";
{
    //spread operator, rest operator, destructuring
    //Learning spread operator
    const bros1 = ["a", "b", "c"];
    const bros2 = ["d", "e", "f"];
    const broList = [...bros1, ...bros2];
    console.log(broList);
    //Learning rest operator
    const greetFriends = (...friends) => {
        friends.forEach((friend) => console.log(`Hi ${friend}`));
    };
    greetFriends("Abul", "Babil");
}
