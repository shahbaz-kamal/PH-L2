{
  // polymorphism
  class Person {
    getSleep() {
      console.log(`I am sleeping 8 hours per day`);
    }
  }
  class Student extends Person {
    getSleep() {
      console.log(`I am sleeping 7 hours per day`);
    }
  }
  class Developer extends Person {
    getSleep() {
      console.log(`I am sleeping 2 hours per day`);
    }
  }

  const getSleepingHour = (param: Person) => {
    param.getSleep();
  };
  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();
  // getSleepingHour(person1);
  // getSleepingHour(person2);
  // getSleepingHour(person3);

  //Using polymorphism in different scenarion
  class Shape {
    getArea(): number {
      return 0;
    }
  }

  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  class Rectangale extends Shape {
    width: number;
    height: number;
    constructor(width: number, height: number) {
      super();
      this.width = width;
      this.height = height;
    }
    getArea(): number {
      return this.width * this.height;
    }
  }

  const getShapeArea = (param: Shape) => {
    console.log(param.getArea());
  };
  const shape = new Shape();
  const circle = new Circle(2);
  const rectangle = new Rectangale(4, 5);

  getShapeArea(rectangle);
}
