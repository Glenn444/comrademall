"use client";
import { useEffect, useState } from "react";
import getAllSchools from "../lib/getAllSchools";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import * as React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import useSWR from 'swr'
import { Button } from "@/components/ui/button";
type schoolsType = {
  id: string;
  name: string;
}[] | undefined;

export default function SelectSchool() {
  const { data, error, isLoading,mutate } = useSWR('Products', getAllSchools)
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSchools, setfilteredSchools] = useState<schoolsType>([]);

  const handleSearchChange = (event: any) => {
    const userInput = event.target.value;
    setSearchTerm(userInput);

    if (userInput.trim() === "") {
      setfilteredSchools([]);
    } else {
      const filteredUniversities = data?.filter((university) =>
        university.name.toLowerCase().includes(userInput.toLowerCase())
      );
      setfilteredSchools(filteredUniversities);
    }
  };

  const sortedSchools = filteredSchools?.sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  return (
    <>
      <div className="w-3/4 mx-auto">
        <p className="text-xl font-bold py-2">Welcome to ComradeMall</p>
        <p>Select your school below to see available products near you</p>
        <div className="py-20">
          <Input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search for your school"
          />
          {searchTerm.trim() !== "" && filteredSchools?.length === 0 && (
            <p className="pt-6">No school found.</p>
          )}
          {(filteredSchools?.length ?? 0)  > 0 && (
            <>
              <ScrollArea className=" w-full rounded-md border">
                <div className="p-4">
                  {sortedSchools?.map((school) => (
                   <div key={school.id}>
                      <div className="text-sm">
                        <Link href={`/${school.id}`}>{school.name}</Link>
                      </div>
                      <Separator className="my-2" />
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </>
          )}
        </div>
        <p className="py-12">
          To Start selling on ComradeMall
            <Button><Link href="/sign-up">Register</Link></Button>
        </p>
      </div>
      <div className="fixed bottom-0 lg:left-[50%] left-16 text-center">
        <p>For any Inquiries or issues</p>
        <p className="text-green-600">Call/Whatsapp: 0712341106</p>
      </div>
    </>
  );
}
