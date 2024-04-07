"use client";

import { UploadButton } from "@/utils/uploadthing";
import { useState } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { ProductImage } from "@/app/actions";
const formSchema = z.object({
  image: z.string(),
});

export default function UploadHome({ params }: { params: { id: string } }) {
  const [image, setImage] = useState<string | undefined>();
  const [imagekey, setImagekey] = useState<string | undefined>();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      image: "",
    },
  });
  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    if(!image && !imagekey)
      {
        toast({
          variant: "destructive",
          description: "Upload an Image",
        });
       
      }else{
    await ProductImage(params.id, image, imagekey);
      }
    
  };
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <h2 className="text-lg my-8 font-semibold">
        Complete Product Upload
      </h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((data) => handleSubmit(data))}
          className="max-w-md w-3/4 flex flex-col  gap-4 mx-auto"
        >
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Upload an Image</FormLabel>
                <FormDescription>
                  Choose an image that will best show your product
                </FormDescription>
                <FormControl>
                  <div className="flex flex-col items-center max-w[400px] p-12 border-2 border-dashed border-primary/50 rounded mt-4">
                    <UploadButton
                      endpoint="imageUploader"
                      onClientUploadComplete={(res) => {
                        // Do something with the response
                        setImagekey(res[0].key)
                        setImage(res[0].url);
                        toast({
                          description: "Upload Complete",
                        });
                      }}
                      onUploadError={(error: Error) => {
                        toast({
                          variant: "destructive",
                          description: `ERROR! ${error.message}`,
                        });
                      }}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full mt-12">
            Finish
          </Button>
        </form>
      </Form>
    </main>
  );
}
