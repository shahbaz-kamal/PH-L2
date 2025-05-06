{
  //* oop -inheritance
  ////This is way to use a class property to another class property. FOr this we need to use a method called super
 class Parent{
    name: string;
    age: number;
    address: string;
    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours}`);
    }
 }
 
 
  class Student extends Parent {
    
    constructor(name: string, age: number, address: string) {
    super(name,age,address)
    }

   
  }
  const student = new Student("Mr. T", 20, "Dhaka");
  student.getSleep(10);

  console.log(student);
  //*another way

  class Teacher extends Parent {
   
    designation: string;
    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
     super(name,age,address)
      this.designation = designation;
    }
    takeClass(numOfClass: number) {
      console.log(`${this.name} will take class of ${numOfClass}`);
    }
  }

  const teacher = new Teacher("kamal mia", 40, "DDDD", "Lecturer");
  console.log(teacher);
  teacher.takeClass(5);
}
