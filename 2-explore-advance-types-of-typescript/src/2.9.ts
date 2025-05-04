{
  //conditional type --> if a type depends on another type

  type a1 = number;
  type b1 = undefined;

  type x = a1 extends null ? true : false; //conditinal type

  type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

type Sheikh={
    bike:string;
    car:string;
    ship:string;
}

type CheckVehicle<T>=T extends keyof Sheikh ?true:false

type HasBike=CheckVehicle<"bikee">
}
