{
  //*generic constraints with keyoff operator

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };
  type Owner = "bike" | "car" | "ship"; //union type
  type OwnerWithKeyOff = keyof Vehicle;

  const owner: OwnerWithKeyOff = "bike";
  console.log(owner);

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user={
    name:"Tamim",
    age:28,
    address:"ctg"
  }
  const result1=getPropertyValue(user,"name")
  console.log(result1)
  //
}
