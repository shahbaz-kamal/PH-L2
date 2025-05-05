"use strict";
{
    // functions with generics
    const createArray = (param) => {
        return [param];
    };
    //create functions with generics
    const createArrayWithGenerics = (param) => {
        return [param];
    };
    const res1 = createArray("Bangladesh");
    const resWithGeneric = createArrayWithGenerics("BangladeshiPola");
    const resGenericObject = createArrayWithGenerics({
        id: "25",
        name: "Komola",
    });
    //   console.log(resGenericObject);
    ////create array with tuple
    const createArrayWithTuple = (param1, param2) => {
        return [param1, param2];
    };
    const resWithTuple1 = createArrayWithTuple("banglades", 222);
    const resWithTuple2 = createArrayWithTuple("Asia", "Europe");
    ////another example
    const addCourceToStudent = (student) => {
        const course = "Web development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourceToStudent({ name: "Mr. X", email: "x@y.com" });
    console.log(student1);
}
