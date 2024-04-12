"use server";
import * as z from "zod";
import prisma from "@/lib/db";
import { redirect } from "next/navigation";
import { auth, currentUser } from "@clerk/nextjs";
import { MyFormFields } from "./components/FormUser";
import getSchoolId from "./lib/getSchoolId";
import { utapi } from "./server/uploadthing"
import ShortUniqueId from 'short-unique-id';
const uid = new ShortUniqueId({ length: 6 });

const formProduct = z.object({
  categoryfilter: z.string(),
  price: z.string(),
});
type MyFormProducts = z.infer<typeof formProduct>;
export async function createComradeBNB({ userId }: { userId: string }) {
  const schoolId = await getSchoolId();
  const data = await prisma.home.findFirst({
    where: {
      userId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  if (data === null) {
    const data = await prisma.home.create({
      data: {
        userId: userId,
        title: "",
        description: "",
      },
    });
    return redirect(`/${schoolId?.schoolsId}/create/${data.id}/structure`);
  } else if (!data.addedCategory && !data.addedDescription) {
    return redirect(`/${schoolId?.schoolsId}/create/${data.id}/structure`);
  } else if (data.addedCategory && !data.addedDescription) {
    return redirect(`/${schoolId?.schoolsId}/create/${data.id}/description`);
  }
}

export async function createCategory(formData: FormData) {
  const schoolId = await getSchoolId();
  const categoryName = formData.get("categoryName") as string;
  const homeId = formData.get("homeId") as string;
  await prisma.home.update({
    where: {
      id: homeId,
    },
    data: {
      categoryName: categoryName,
      addedCategory: true,
    },
  });
  return redirect(`/${schoolId?.schoolsId}/create/${homeId}/description`);
}

// export async function CreateDescription(formData: FormData) {
//   const title = formData.get("title") as string;
//   const description = formData.get("description") as string;
//   const price = formData.get("price");
//   const imageFile = formData.get("image") as File;
//   const homeId = formData.get("homeId") as string;
//   const { userId } = auth();

//   const { data: imageData } = await supabase.storage
//     .from("images")
//     .upload(`${imageFile.name}-${new Date()}`, imageFile, {
//       cacheControl: "2592000",
//     });
//   const data = await prisma.home.update({
//     where: {
//       id: homeId,
//     },
//     data: {
//       title: title,
//       description: description,
//       price: Number(price),
//       photo: imageData?.path,
//       addedDescription: true,
//     },
//   });
//   if (data) {
//     let schoolId = await prisma.user.findUnique({
//       where: {
//         id: userId ?? undefined,
//       },
//       select: {
//         schoolsId: true,
//       },
//     });
//     return redirect(`/${schoolId?.schoolsId}/success`);
//   }
// }
export async function CreateUserDetails(values: MyFormFields) {
  const { userId } = auth();
  const schoolId = values.school;
  const phonenumber = values.phone;
  const name = values.name;

  const data = await prisma.user.create({
    data: {
      id:userId ?? "",
      phone: phonenumber,
      schoolsId: schoolId,
      name: name,

    },
  });
  if (data) {
    return redirect(`/${schoolId}`);
  }
}
export async function CreateProduct() {
  const schoolId = await getSchoolId();
  const { userId } = auth();
  const data = await prisma.products.findFirst({
    where: {
      userId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  if (data === null) {
    const data = await prisma.products.create({
      data: {
        userId: userId,
        categoryName: "",
        categoryFilter: "",
        description: "",
        key: uid.rnd()
      },
    });

    return redirect(`/${schoolId?.schoolsId}/products/${data.id}/category`);
  } else if (!data.addedCategory) {
    return redirect(`/${schoolId?.schoolsId}/products/${data.id}/category`);
  }else if(data.addedCategory && !data.price){
    return redirect(`/${schoolId?.schoolsId}/products/${data.id}/product`);
  }else if(data.addedCategory && data.price && !data.photo){
    return redirect(`/${schoolId?.schoolsId}/products/${data.id}/upload`);
  }else {
    return redirect(`/${schoolId?.schoolsId}/products/${data.id}/category`);
  }
}

export async function CreateProductsDetails(values: MyFormProducts,val:string) {

  
  const schoolId = await getSchoolId();
  const { userId } = auth();
  const price = values.price;
  const categoryfilter = values.categoryfilter as string;
  
  const data = await prisma.products.update({
    where: {
      id: val,
    },
    data: {
      price: Number(price),
      categoryFilter: categoryfilter,
      userId: userId,
    },
  });

  if (data) {
    return redirect(`/${schoolId?.schoolsId}/products/${val}/upload`);
  }
}
export async function createProductCategory(formData: FormData) {
  const schoolId = await getSchoolId();
  const categoryName = formData.get("categoryName") as string;
  const productId = formData.get("productId") as string;
  await prisma.products.update({
    where: {
      id: productId,
    },
    data: {
      categoryName: categoryName,
      addedCategory: true,
    },
  });
  return redirect(`/${schoolId?.schoolsId}/products/${productId}/product`);
}

export const imageDelete = async(imageKey: string)=>{
  try {
      const res = await utapi.deleteFiles(imageKey);
      if(res.success){
          await prisma.products.delete({
            where:{
              key:imageKey
            }
          })
      }
  } catch (error) {
      console.log("Eror deleting");
  }
}
export async function createSchool(value: string) {
  const { userId } = auth();
  if (userId === "user_2efq0YY6PS7L76scYJR4Jzf1cQ8") {
    const school = await prisma.schools.create({
      data: {
        name: value,
      },
    });
    return school;
  }
}

export async function ProductImage(prodId:string, imageUrl:string | undefined,imagekey:string | undefined) {
  if(imageUrl && imagekey ){
   
    const schoolId = await getSchoolId();
    await prisma.products.update({
      where:{
        id:prodId
      },
      data:{
        key:imagekey,
        photo:imageUrl,
        addedPhoto:true
      }
    })
    return redirect(`/${schoolId?.schoolsId}`);
  }
}
