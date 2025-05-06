{
  //*type guards

  //?type guard using typeof operator

  type Alphanumeric = string | number;

  const add = (x: Alphanumeric, y: Alphanumeric): Alphanumeric => {
    if (typeof x === "number" && typeof y === "number") {
      return x + y;
    } else {
      return x.toString() + y.toString();
    }
  };

  const result1 = add(10, 4);
  // console.log(result1)

  //?type guard using "in guard"

  type NormalUser = {
    name: string;
  };
  type AdminUser = { name: string; role: string };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`I am ${user.name} & my role is ${user.role}`);
    } else {
      console.log(`I am ${user.name}  & I am normal user`);
    }
  };

  getUser({name:"Tamim",role:"admin"})
}
