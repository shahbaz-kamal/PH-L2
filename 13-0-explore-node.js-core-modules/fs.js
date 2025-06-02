// There is two ways of reading from file

////1.synchronus way
//step 1:file read --> single thread / I/o Intensive task --> blocked --> not go to thread pool
const fs = require("fs");

// const data=fs.readFileSync("./hello.txt",{encoding:"utf-8"})

// console.log(data)

// console.log("task 1")
// const text="learning file system"
// fs.writeFileSync("./hello.txt",text)
// console.log("task 3")
// const data2=fs.readFileSync("./hello.txt",{encoding:"utf-8"})
// console.log("task 4")
// console.log(data2)
////2.Asynchronus way
//step 1:file read --> thread pool / I/o Intensive task --> not blocked -->  go to thread pool
console.log("task 1");

let text = "node js";
fs.writeFile("./hello.txt", text, { encoding: "utf-8" }, (err) => {
  if (err) {
    console.log(`Something went wrong ==> ${err}`);
    return;
  }
  console.log("file written successfully");
});

const data = fs.readFile("./hello.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log(`Something went wrong ==> ${err}`);
  }
  console.log(data);
});
console.log("task 4");

console.log("task 3");
