{
  //type constraints

  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "next level dev";
    return { ...student, course };
  };

  const student1 = addCourseToStudent({ id: 2, name: "a", email: "a@b.com" });
  console.log(student1);
}
