let consta = 5;

((name) => {
    let a = 51; //block scope
  console.log(`Learning ${name}`);
})("node");

console.log(a);
