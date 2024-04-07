"use server"
import prisma from "@/lib/db";


export default async function getAllSchools() {
    const Allschools = await prisma.schools.findMany();
   if (Allschools){
    return Allschools
   }
  return []
}
