"use client"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"



interface iAppProps{
    category: string,
    imagePath: string,
    price: number,
    ownerName: string | undefined,
    ownerPhone: string | null | undefined,
    homeId:string
}

export default function ListingCart({category, homeId,imagePath, price,ownerName, ownerPhone}:iAppProps) {
    const params = useParams();
    
    
  return (
    <div className="flex flex-col">
     <div className="relative h-72">
        <Image src={`https://tpqmvytjsrwdcohagklq.supabase.co/storage/v1/object/public/images/${imagePath}`} alt="Image of house"
        fill
        className="rounded-lg h-full object-cover"
        />
     </div>
     <Link href={`/${params.schoolId}/house/${homeId}`} className="mt-2 grid grid-cols-2">
        <h3>{category.toLocaleUpperCase()}</h3>
        <h3 className="text-sm text-muted-foreground">Owner: {ownerName}</h3>
       
       <p className="text-muted-foreground">
        <span className="font-medium text-black text-sm">Ksh:{price} </span>/Night
        </p>
        <h2 className="text-sm text-muted-foreground">Phone: {ownerPhone}</h2>
     </Link>
    </div>
  )
}
