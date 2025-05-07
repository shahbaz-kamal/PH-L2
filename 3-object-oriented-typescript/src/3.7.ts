{
  //?statics in OOP :Memory dosent change

  class Counter {
    static count: number = 0;
    static increment() {
      ////if we use static than we need to access that by using class name
      return (Counter.count = Counter.count + 1);
    }
    static decrement() {
      return (Counter.count = Counter.count - 1);
    }
  }

  //   const instance1 = new Counter();
  console.log(Counter.increment());

  //*these two instances are separate instance and allocates in different memories. bUT WE DONT WANT THAT. wE WANT THAT THE VALUE OF COUNT SHOULD CHANGE WITH STATIC
}
