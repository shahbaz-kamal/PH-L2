{
  //!Task 3: Object Types, Type Alias, & Literal Types
  // Objective: Define a structured Person object using Type Aliases.
  // Instructions:
  // Define a Person type alias with properties for Name, Address, Hair and Eye Color, Income and Expense, Hobbies, Family Members, Job, Skills, Marital Status, and Friends.

  type Person = {
    name: string;
    address: string;
    hairColor: string;
    eyeColor: string;
    income: number;
    expense: number;
    hobbies: string[];
  };
  const person1: Person = {
    name: "Tamim",
    address: "jahduas",
    hairColor: "Black",
    eyeColor: "White",
    income: 20000,
    expense: 30000,
    hobbies: ["playing", "Accepting"],
  };

  //
}
