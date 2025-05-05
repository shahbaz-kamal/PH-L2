"use strict";
{
    //type constraints
    const addCourseToStudent = (student) => {
        const course = "next level dev";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({ id: 2, name: "a", email: "a@b.com" });
    console.log(student1);
}
