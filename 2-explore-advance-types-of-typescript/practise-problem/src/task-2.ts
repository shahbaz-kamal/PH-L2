{
  // !Objective: Create a function with parameters and an optional literal type.

  // Instructions:
  // Define a function that takes:
  // name (string)
  // age (number)
  // role (optional, with type 'admin' | 'user' | 'guest')
  // The function should log these values or perform a basic action.

  type Role = "admin" | "user" | "guest";

  type Information = (name: string, age: number, role?: Role) => void;

  const information: Information = (name, age, role) => {
    let userInfo;
    if (role) {
      userInfo = {
        name,
        age,
        role,
      };
      console.log(
        `You are ${role === "admin" || role === "user" ? "an" : "a"} ${role}`
      );
      console.log(userInfo)
    }
   
  };

  information("Tamim",28,"guest")
}
