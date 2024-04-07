"use server"
import prisma from "@/lib/db";

export default async function getCategory(prodId:string) {

    const category = await prisma.products.findUnique({
        where:{
            id:prodId
        },
        select:{
            categoryName:true
        }
    })
   
  return category;
}