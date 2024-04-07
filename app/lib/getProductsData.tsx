"use server"

import prisma from "@/lib/db";
import { auth, currentUser } from "@clerk/nextjs";

export default async function getProductsData() {
  const { userId } = auth();
  
  if(userId){
  const data = await prisma.products.findMany({
    where: {
      userId: userId,
    },
    select: {
      photo: true,
      id: true,
      categoryName: true,
      price: true,
      key:true
    },
  });

  return data;
}
return [];
}