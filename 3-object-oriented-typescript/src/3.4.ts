{
  //instance of guard
  class Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    makeSound() {
      console.log("I am normal animal");
    }
  }
  class Dog extends Animal {
    constructor(name: string, age: number) {
      super(name, age);
    }
    makeBark() {
      console.log(`I am ${this.name}. my age is ${this.age}`);
    }
  }

  class Cat extends Animal {
    constructor(name: string, age: number) {
      super(name, age);
    }
    makeMeow() {
      console.log(`I am ${this.name}. my age is ${this.age}`);
    }
  }

  const getAnimal = (animal: Animal) => {
    if (animal instanceof Dog) {
      animal.makeBark(); ////we cant accsess makeBark  here cause this scope know  animal is dog
    } else if (animal instanceof Cat) {
      animal.makeMeow(); ////we cant accsess get meow here cause this scope know  animal is cat
    } else animal.makeSound(); ////we cant accsess make bark here cause this scope dosent know if animal is dog or cat
  };
  const dog = new Dog("dog", 20);
  const cat = new Cat("cat", 2);
  const normalAnimal = new Animal("Normal", 6);
  // console.log({ cat });
  getAnimal(cat);
  //*we can use function to handle it smartly

  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };
  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };
  const getAnimal2 = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMeow();
    } else {
      animal.makeSound();
    }
  };
  getAnimal2(cat);
}
