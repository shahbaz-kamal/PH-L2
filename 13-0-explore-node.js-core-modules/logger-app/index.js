// console.log(process)
const path=require("path")
const fs=require("fs")
const inputArguments=process.argv.slice(2)

const text=inputArguments.join(" ")
const timeStamp=new Date().toISOString()
const messasge=`${text} ${timeStamp} \n`


if(!messasge){
    console.log("❌ please provide a message to log")
    console.log("Example: node index.js hello world")
    process.exit(1)
}
const filePath=path.join(__dirname,"log.txt")

fs.appendFile(filePath,messasge,{encoding:"utf-8"},()=>{
    console.log("Your log added successfully")
})
// console.log(filePath)
// console.log(text)
