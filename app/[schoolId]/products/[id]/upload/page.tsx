"use client";
import { ProductImage } from "@/app/actions";
import { CldImage, CldUploadButton } from "next-cloudinary";


type Info = {
  public_id: string;

}

type UploadEvent = {
  event: "success";
  info: Info;
}


export default function Home({ params }: { params: { id: string } }) {
  const handleUploadSuccess = async(event: UploadEvent) => {
      await ProductImage(params.id, event);
  };
  return (
    <main className="flex flex-col my-6">
      <h2 className="pb-2 text-xl font-semibold">Upload Product Image below</h2>
      <CldUploadButton uploadPreset="en5vjmdx"
      onSuccess={handleUploadSuccess as any}
       />
    </main>
  );
}
