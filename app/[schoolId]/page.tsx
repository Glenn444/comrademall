import prisma from "@/lib/db";
import CategoryItems from "../components/CategoryItems";
import ListingCart from "../components/ListingCart";
import { SelectFilterItems } from "../components/SelectFilter";
import ProductListingCart from "../components/ProductsListing";
import { Suspense } from "react";
import { SkeletonCard } from "../components/SkeletonCard";
import NoItems from "../components/NoItems";
import {unstable_noStore as noStore} from "next/cache"
type Params = {
  params: {
    schoolId: string;
  };
  searchParams: {
    filter?: string;
    item?: string;
  };
};
async function getProductsData({params,searchParams}:Params) {
  let whereCondition = {
    categoryName: searchParams?.filter,
    categoryFilter: searchParams?.item,
    addedCategory: true,
    
  };

  if (searchParams?.item && searchParams?.item === "all") {
    whereCondition.categoryFilter = undefined;
  }
  if (!searchParams?.filter){
    whereCondition.categoryName = "furniture"
  }
  noStore()
  const data = await prisma.products.findMany({
    where: {
      AND:[
        whereCondition,
        {
          User:{
            schoolsId:params.schoolId
          }
        }
      ]
    },
    select: {
      photo: true,
      id: true,
      price: true,
      categoryName: true,
      User: {
        select: {
          name: true,
          phone: true,
          school: {
            select: {
              id: true,
            },
          },
        },
      },
    },
  });
  return data;
}
export default function Home(params:Params ) {
  return (
    <>
      <div className="container mx-auto px-5 lg:px-10">
        <CategoryItems />
        <SelectFilterItems />
        <Suspense key={params.searchParams?.filter} fallback={<SkeletonLoading />}>
        <ShowItems searchParams={params.searchParams} params={params.params}/>
        </Suspense>
      </div>
    </>
  );
}

async function ShowItems({searchParams, params}:Params) {
  
  const ProductsData = await getProductsData({params,searchParams});

  return (
    <>
        { searchParams?.filter !== "comradeBNB" && ProductsData.length !== 0 ? (
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            {ProductsData.map((item) => (
              <ProductListingCart
                key={item.id}
                category={item.categoryName as string}
                imagePath={item.photo as string}
                price={item.price as number}
                ownerName={item.User?.name}
                ownerPhone={item.User?.phone}
              />
            ))}
          </div>
        ): <NoItems />}

    </>
  );
}

function SkeletonLoading(){
  return(
    <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  )
}