{
  // ?abstraction : YOU WONT KNOW THE REAL THING BUT WILL GET AN IDEA
  //? There are two ways to use abstraction . 1.interface 2. abstract

  //*using interface

  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log("I am starting the Engine");
    }
    stopEngine(): void {
      console.log(`I am stopping the car`);
    }
    move(): void {
      console.log(`I am moving The Car`);
    }
    test() {
      console.log(`I am testing the car`);
    }
  }

  const toyotaCar = new Car1();
  //   toyotaCar.stopEngine();
  //* using abstract class -->Leader Class

  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test() {
      console.log(`I am testing the car`);
    }
  }

  class HondaCar extends Car2{
    startEngine(): void {
        console.log("I am starting the Engine");
      }
      stopEngine(): void {
        console.log(`I am stopping the car`);
      }
      move(): void {
        console.log(`I am moving The Car`);
      }
  }
  const hondaCar=new HondaCar()
  hondaCar.startEngine()
}
