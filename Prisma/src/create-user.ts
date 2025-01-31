import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
  const res = await prisma.user.create({
    data:{
        email:username,
        password,
        firstName,
        lastName
    },
    select:{
        id:true,
        password:true
    }
  })
  console.log(res)
}
insertUser("pradeep1@gmail.com","12345","pradeep","yadav");