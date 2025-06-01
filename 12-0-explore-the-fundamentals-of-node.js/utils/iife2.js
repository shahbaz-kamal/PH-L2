let consta = 5;

((name) => {
    let a = 51; //block scope
  console.log(`Learning ${name}`);
})("node");

console.log(global);
console.log(module)
console.log("Dirname=>",__dirname)
console.log("File NAme=>",__filename)