{
  //
  //ternary operator || optional chhaining || nullish coalescing

  const age: number = 15;
  if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("not Adult");
  }

  const isAdult=age>=18?"adult":"not adult"
  console.log({isAdult})

  const isAuthiorized=null
  const result1=isAuthiorized??"Guest"
  console.log({result1})
  ///nullish coalishing operator --> if decision making should be done by depending on null and undefined

  //
}
