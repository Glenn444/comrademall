"use client";

import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { categoryItems } from "../lib/CategoryList";
import Image from "next/image";
import { useState } from "react";

export function SelectProductCategory() {
    const [selectedCategory, setSelectedCategory] = useState<string | ''>('')
  return (
    <div className="mb-36">
      <input type="hidden" name="categoryName" value={selectedCategory as string}/>
      {categoryItems.map(
        (item) =>
        item.name !== "comradeBNB" &&
            <div key={item.id} className="w-1/2 mx-auto my-6 ">
              <Card className={selectedCategory === item.name? "border-green-900" : ""}
              onClick={()=>setSelectedCategory(item.name)}
              >
                <CardHeader>
                  <h3 className="flex items-center justify-center font-medium text-green-600">{item.title}</h3>
                </CardHeader>
              </Card>
            </div>
          
      )}
    </div>
  );
}
