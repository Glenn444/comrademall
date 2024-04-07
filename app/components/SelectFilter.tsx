"use client";
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categoryItems } from "../lib/CategoryList";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function SelectFilterItems() {

    const searchParams = useSearchParams();
    const filter = searchParams.get("filter");
    const pathname = usePathname();
  
    const { replace } = useRouter();

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('item', term);
    } else {
      params.delete('query');
    }

    replace(`${pathname}?${params.toString()}`);
  };
  
  return (
    <div className="flex justify-center">
    <Select onValueChange={handleSearch}>
      <SelectTrigger className="w-[150px]">
        <SelectValue placeholder="All" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="all">All</SelectItem>
          {categoryItems.map((item) =>
            (item.name) === filter && (
                item.category.map((item1, id) => (
                    
                    <SelectItem value={item1.name} key={id}>
                        {item1.title}
                    </SelectItem>
                ))
            )
          )}
        </SelectGroup>
      </SelectContent>
    </Select>
    </div>
  );
}
