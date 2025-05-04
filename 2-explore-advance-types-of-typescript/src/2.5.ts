{
  // functions with generics

  const createArray = (param: string): string[] => {
    return [param];
  };
  //create functions with generics
  const createArrayWithGenerics = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("Bangladesh");
  const resWithGeneric = createArrayWithGenerics<string>("BangladeshiPola");

  type User = {
    id: string;
    name: string;
  };

  const resGenericObject = createArrayWithGenerics<User>({
    id: "25",
    name: "Komola",
  });
//   console.log(resGenericObject);

  ////create array with tuple

  const createArrayWithTuple = <X, Y>(param1: X, param2: Y): [X, Y] => {
    return [param1, param2];
  };

  const resWithTuple1 = createArrayWithTuple<string, number>("banglades", 222);
  const resWithTuple2=createArrayWithTuple<string,string>("Asia","Europe")


////another example

const addCourceToStudent=<T>(student:T)=>{
    const course="Web development"
    return {...student,course}
}

const student1=addCourceToStudent({name:"Mr. X",email:"x@y.com"})
console.log(student1)
}
