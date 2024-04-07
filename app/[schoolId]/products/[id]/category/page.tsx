import React, { useEffect } from 'react'
import { createProductCategory } from "@/app/actions";
import CreateBottomBar from "@/app/components/CreateBottomBar";
import { SelectCategory } from "@/app/components/SelectedCategory";
import { SelectProductCategory } from '@/app/components/SelectedProductCtaegory';
import { redirect } from 'next/navigation';

export default async function ProductCategoryPage({params}:{params:{id:string}}){

    return (
        <>
        <div className="w-3/5 mx-auto">

            <h2 className="text-xl font-semibold tracking-tight transition-colors">
                Select Product Category
            </h2>
        </div>
        <form action={createProductCategory}>
            <input type="hidden" name="productId" value={params.id} />
            <SelectProductCategory />

            <CreateBottomBar/>
        </form>
        </>
    )
}

