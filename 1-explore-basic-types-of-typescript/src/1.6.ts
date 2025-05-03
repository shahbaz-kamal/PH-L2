{
  // Function in ts
  //Normal Function

  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  add(2, 2);

  const addArrow = (num1: number, num2: number): number => {
    return num1 + num2;
  };

  //object -->function -->method

  const poorUSer = {
    name: "Tamim",
    balance: 0,
    addBalance(balance: number) {
      return `My new Balance is ${this.balance + balance}`;
    },
  };

  console.log(poorUSer.addBalance(2));

  const arr: number[] = [2, 4, 6];

  const newArr: number[] = arr.map(
    (element: number): number => element * element
  );
  console.log(newArr);
}
