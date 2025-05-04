{
  //
  //type interface
//!We should use type alias in case of primitive data and array cause syntax is easier. We can also use it for function 
//!We can use interfaces in case of function and objects

  type User1 = {
    //this is type alias
    name: string;
    age: number;
  };
  //this is type interfae

  interface User2 {
    name: string;
    age: number;
  }

  type UserWithRole1 = User1 & { role: string };

  interface UserWithRole2 extends User1 {
    role: string;
  }
  const user1: UserWithRole1 = {
    name: "Tamim",
    age: 27,
    role: "admin",
  };

  const user2: UserWithRole2 = {
    name: "Hello",
    age: 28,
    role: "admin",
  };

  //*declaring array and functions with interfaces
  //? array --> object, function -->object, so interface can be with with array & onbject

  ////declareing array with aliases
  type Roll1 = number[];

  const roll1: Roll1 = [1, 2, 3];

  ////declaring array with interfaces
  interface Roll2 {
    [index: number]: number;
  }
  const roll2: Roll2 = [2, 3, 4];

  ////declaring function with aliases

  type Add1 = (num1: number, num2: number) => number;

  const add1: Add1 = (num1, num2) => num1 + num2;
  ////declaring functions with  interface

  interface Add2 {
    (num1: number, num2: number): number
  }
  const add2: Add2 = (num1, num2) => num1 + num2;
}

