"use server"
import prisma from "@/lib/db";
import { auth, currentUser } from "@clerk/nextjs";
export default async function getSchoolId() {
    const { userId } = auth();
    let schoolId = null;
    
    if(userId){
    schoolId = await prisma.user.findFirst({
        where:{

            id:userId
        },
        select:{
            schoolsId:true
        }
    })
}
  return schoolId
}