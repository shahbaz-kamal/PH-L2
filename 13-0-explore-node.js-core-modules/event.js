const EventEmitter=require("node:events");

class SchoolBell extends EventEmitter {}

const schoolBell=new SchoolBell()

schoolBell.on('ring',()=>{
    console.log("Class finish")
})
schoolBell.on('broken',()=>{
    console.log("Bell broken")
})
schoolBell.on('ring',()=>{
    console.log("Class arekta hobe")
})

schoolBell.emit("ring")

schoolBell.emit("broken")