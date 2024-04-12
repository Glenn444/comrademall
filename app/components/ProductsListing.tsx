"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { CldImage } from "next-cloudinary";

interface iAppProps {
  category: string;
  imagePath: string;
  price: number;
  ownerName: string | undefined;
  ownerPhone: string | null | undefined;
}

export default function ProductListingCart({
  category,
  imagePath,
  price,
  ownerName,
  ownerPhone,
}: iAppProps) {
  const params = useParams();

  return (
    <div className="flex flex-col my-2">
      <div className="relative h-72">
        <CldImage
          width="500"
          height="500"
          src= {imagePath}
          sizes="100vw"
          alt="Product Image"
          className="rounded-lg object-cover"
        />
      </div>
      <Link href="" className="mt-2 grid grid-cols-2">
        <h3>{category.toLocaleUpperCase()}</h3>
        <h3 className="text-sm text-muted-foreground">Owner: {ownerName}</h3>

        <p className="text-muted-foreground">
          <span className="font-medium text-black text-sm">Ksh:{price} </span>
        </p>
        <h2 className="text-sm text-muted-foreground">Phone: {ownerPhone}</h2>
      </Link>
    </div>
  );
}
