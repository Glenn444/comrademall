"use client"
import DashboardList from "@/app/components/DashboardList";
import getProductsData from "@/app/lib/getProductsData";
import getSchoolId from "@/app/lib/getSchoolId";
import { Button } from "@/components/ui/button";
import useSWR from 'swr'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import React from 'react'
import { UserProfile } from "@clerk/nextjs";


export default  function Dasboard() {
    const { data, error, isLoading,mutate } = useSWR('Products', getProductsData)
    const router = useRouter()
  
  if(isLoading) return <p>Loading data...</p>
  if(error) return <p>Failed to fetch data</p>

    return (
      <main>
        <div className="flex justify-between">
          <h1>Welcome to your dashboard</h1>
          <UserProfile />
        </div>
        <hr />
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        {data?.length === 0 && (<div>
          <p>You have No Products</p>
          </div>)}
        {data?.map((item) => (
          <div key={item.id} className="flex flex-col p-6">
            <DashboardList
              category={item.categoryName}
              imagePath={item.photo}
              price={item.price}
            />
          </div>
        ))}
      </div>
      </main>
    )
}
