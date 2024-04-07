"use client"
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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
  Select,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import { CreateUserDetails } from "../actions";
import { useState } from "react";

const formSchema = z.object({
  name:z.string(),
  school: z.string(),
  phone: z
    .string()
    .min(10, { message: "Phone numbers are a minimum of 10 digits" })
    .regex(/^[0-9]+$/, { message: "Only numbers are allowed" })
    .length(10, { message: "Ten numbers are required" }),
});
export type MyFormFields = z.infer<typeof formSchema>
export default function UserDetails({
  schools,
}: {
  schools: {
    id: string;
    name: string;
  }[];
}) {
  
  const [Creating, setCreating] = useState(false);
  const sortedSchools = schools?.sort((a, b) => a.name.localeCompare(b.name));
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      school: "",
      phone: "",
    },
  });

  const handleSubmit = async(values: z.infer<typeof formSchema>) => {
    setCreating(true)
    await CreateUserDetails(values);
    setCreating(false)
  };

  return (
    <main className="flex min-h-screen flex-col items-center ">
       <h2 className="text-lg my-8 font-semibold">Complete your details below</h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((data)=>handleSubmit(data))}
          className="max-w-md w-3/4 flex flex-col  gap-4 mx-auto"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="0712345678" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="school"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>School</FormLabel>
                  <Select required  onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your school" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Schools</SelectLabel>
                        {sortedSchools.map((school) => (
                          <SelectItem key={school.id} value={school.id}>
                            {school.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <Button type="submit" className="w-full my-12">
          {Creating ? "Please wait..." : "Done"}
          </Button>
        </form>
      </Form>
    </main>
  );
}
