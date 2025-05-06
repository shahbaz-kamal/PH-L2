{
  // classes in OOp

  class Animal {
    name: string;
    species: string;
    sound: string;
    constructor(name: string, species: string, sound: string) {
      this.name = name;
      this.sound = sound;
      this.species = sound;
    }

    makeSound() {
      console.log(`The ${this.name} has ${this.sound} sound`);
    }
  }

  const dog = new Animal("GS", "dog", "ghew ghew");
  console.log(dog);

  //*this can be made easier with parameters public
  class Animal1 {
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}
  }
  const cat = new Animal1("cat", "catty", "meww");
  console.log(cat);
}
