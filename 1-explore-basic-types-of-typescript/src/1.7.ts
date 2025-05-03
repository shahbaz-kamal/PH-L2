{
  //spread operator, rest operator, destructuring

  //Learning spread operator
  const bros1: string[] = ["a", "b", "c"];
  const bros2: string[] = ["d", "e", "f"];

  const broList = [...bros1, ...bros2];
  console.log(broList);

  //Learning rest operator
  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`Hi ${friend}`));
  };

  greetFriends("Abul", "Babil");
}
