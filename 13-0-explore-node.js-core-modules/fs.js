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
// console.log("task 1");

// let text = "node js";

// const data = fs.readFile("./hello-world.txt", { encoding: "utf-8" }, (err, data) => {
//   if (err) {
//     console.log(`Something went wrong ==> ${err}`);
//   }
//   fs.writeFile("./hello.txt", data, { encoding: "utf-8" }, (err) => {
//     if (err) {
//       console.log(`Something went wrong ==> ${err}`);
//       return;
//     }
//     console.log("file written successfully");
//   });
// });
// console.log("task 4");

// console.log("task 3");

const readSTream = fs.createReadStream("./hello-world.txt", {
  encoding: "utf-8",
});
const writeStream = fs.createWriteStream("./hello.txt", { encoding: "utf-8" });

readSTream.on("data", (data) => {
  console.log(data);
  writeStream.write(data, (err) => {
    if (err) {
      throw Error("Erorr", err);
    }
  });
});

readSTream.on("error", (err) => {
  if (err) {
    throw Error("Erorr", err);
  }
});



readSTream.on("end",()=>{
    console.log("reading ended")
    writeStream.end()
})

writeStream.on("finish",()=>{
    console.log("Written successfully")
})
