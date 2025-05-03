{
  //type alias
  type Student = {
    name: string;
    age: number;
    contact?: string;
    gender: string;
    address: string;
  };

  const student1: Student = {
    name: "tamim",
    age: 20,
    gender: "Male",
    address: "Dhaka",
  };
  console.log(student1);

  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;
  //
}
