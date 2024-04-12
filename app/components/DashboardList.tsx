"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { CldImage } from "next-cloudinary";

interface iAppProps {
  category: string;
  imagePath: string | null;
  price: number | null;
}

export default function DashboardList({
  category,
  imagePath,
  price,
}: iAppProps) {
  const params = useParams();

  return (
    <div className="flex flex-col">
      <div className="relative h-72">
        <CldImage
          width="500"
          height="500"
          src={imagePath || ""}
          sizes="100vw"
          alt="Description of my image"
        />
      </div>
      <h3>Category: {category.toLocaleUpperCase()}</h3>

      <p className="text-muted-foreground">
        <span className="font-medium text-black text-sm">Price: {price} </span>
      </p>
    </div>
  );
}
