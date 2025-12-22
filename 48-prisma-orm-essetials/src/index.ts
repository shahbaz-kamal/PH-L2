import { prisma } from "./lib/prisma";




async function main() {
  //  const result=await prisma.user.create({
  //   data:{
  //       name:"Tamim",
  //       email:"b@c.com"
  //   }
  //  })
  // console.log(result);
const  userData=await prisma.user.findMany()

const singleUser=await prisma.user.findUnique(
{where :{
  id:1
}}
)
console.log(userData);
console.log(singleUser);
}

main()