{
  //*Utility type
  ////pick utility type
  type Person = {
    name: String;
    age: number;
    email?: string;
    contactNo: number;
  };

  type NameAge = Pick<Person, "name" | "age">;
  ////omit utility type

  type ContactInfo = Omit<Person, "name" | "age">;

  ////Required utility

  type PersonRequire = Required<Person>;

  ////Partial type

  type PersonPertial = Partial<Person>;

  ////ReadOnly
  type PersonReadOnly = Readonly<Person>;

  const person1: PersonReadOnly = {
    name: "Mr. X",
    age: 200,
    contactNo: 172,
  };

  ////Record

  type MyObj = Record<string, string>;

  const obj1: MyObj = {
    a: "aa",
    b: "gs",
  };

  type EmptyObject=Record<string,unknown>
  //
}
