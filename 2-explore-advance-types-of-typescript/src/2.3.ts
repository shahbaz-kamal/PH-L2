{
  //*generic type
  //!generic types can be used to declare generalized typ so that it is reusable

  ////generic araays of string / number

  type GenericArray<T> = Array<T>;

  const rollNumbers: GenericArray<number> = [1, 2, 3];
  const mentors: GenericArray<string> = ["a", "b", "c"];
  const boolArray: GenericArray<boolean> = [true, false, true];
  ////generic array of object

  const user: GenericArray<{ name: string; age: number }> = [
    { name: "Tamim", age: 20 },
    { name: "Karim", age: 50 },
  ];
  ////generic tuple

  type GenericTuple<X, Y> = [X, y];

  const manush: GenericTuple<string, string> = ["a", "b"];
  const userWithId: GenericTuple<number, { name: string; email: string }> = [
    12345,
    {
      name: "Tamim",
      email: "a@b.com",
    },
  ];

  //
}
