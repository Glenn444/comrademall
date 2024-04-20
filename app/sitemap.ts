import getAllSchools from "./lib/getAllSchools";
import { MetadataRoute } from "next";

export default async function sitemap():Promise<MetadataRoute.Sitemap>{
    const schools = await getAllSchools();
    const schoolEntries: MetadataRoute.Sitemap = schools.map(({id})=>({
        url:`${process.env.NEXT_PUBLIC_BASE_URL}/${id}`,
    }))
    return [
        {
         url:`${process.env.NEXT_PUBLIC_BASE_URL}/about`   
        },
        ...schoolEntries
    ]
}