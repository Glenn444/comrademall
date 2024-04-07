"use client";
import { CreateProductsDetails } from "@/app/actions";
import { categoryItems } from "@/app/lib/CategoryList";
import getCategory from "@/app/lib/getCategory";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formProduct = z.object({
  categoryfilter: z.string(),
  price: z.string(),
});
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import Router from "next/router";
type category = {
  categoryName: string;
} | null;
export default function ProductDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const [Creating, setCreating] = useState(false);

  const [categoryFilter, setcategoryFilter] = useState("");
  const [category, setCategory] = useState<category>();


  useEffect(() => {
    const fetchCategory = async () => {
      const category1 = await getCategory(params.id);
      setCategory(category1);
    };
    fetchCategory();
  }, [params.id]);

  const form = useForm<z.infer<typeof formProduct>>({
    resolver: zodResolver(formProduct),
    defaultValues: {
      categoryfilter: "",
      price: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof formProduct>) => {
    
    await CreateProductsDetails(values,params.id);
   
  };
  return (
    <>
      <div className="w-3/4 mx-auto">
        <h2 className="text-xl font-semibold tracking-tight transition-colors">
          Complete Product details
        </h2>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((data) => handleSubmit(data))}
          className="max-w-md w-3/4 flex flex-col  gap-4 mx-auto"
        >
          {/* <input type="hidden" name="prodId" value={params.id} /> */}
          <FormField
            control={form.control}
            name="categoryfilter"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Item Name</FormLabel>
                  <Select required onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Item" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="all">All</SelectItem>
                        {categoryItems.map(
                          (item) =>
                            item.name.toLocaleLowerCase() ===
                              category?.categoryName.toLocaleLowerCase() &&
                            item.category.map((item1, id) => (
                              <SelectItem value={item1.name} key={id}>
                                {item1.title}
                              </SelectItem>
                            ))
                        )}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
         <FormField
            control={form.control}
            name="price"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Enter Price</FormLabel>
                  <FormControl>
                    <Input placeholder="Price" type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <Button
           type="submit" className="w-full my-12">
           Submit
          </Button>
        </form>
      </Form>
    </>
  );
}

