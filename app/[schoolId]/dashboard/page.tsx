"use client"
import DashboardList from "@/app/components/DashboardList";
import getProductsData from "@/app/lib/getProductsData";
import getSchoolId from "@/app/lib/getSchoolId";
import { Button } from "@/components/ui/button";
import useSWR from 'swr'
import {  useState } from "react";
import { imageDelete } from "@/app/actions";


export default  function Dasboard() {
  
    const { data, error, isLoading,mutate } = useSWR('Products', getProductsData)
    const [deleting, setDeleting] = useState(false);
   
    async function deleteImage(imageKey: string | null) {
      setDeleting(true);

      await imageDelete(imageKey);

        mutate(getProductsData);
      setDeleting(false);
    }
  if(isLoading) return <p>Loading data...</p>
  if(error) return <p>Failed to fetch data</p>

    return (
        
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        {data?.length === 0 && <p>You have no Products.</p>}
        {data?.map((item) => (
          <div key={item.id} className="flex flex-col p-6">
            <DashboardList
              category={item.categoryName}
              imagePath={item.photo}
              price={item.price}
            />
            <Button
              variant="destructive"
              onClick={() => deleteImage(item.photo)}
              disabled={deleting}
            >
              {deleting ? "Please wait deleting..." : "Delete"}
            </Button>
          </div>
        ))}
      </div>
    )
}
