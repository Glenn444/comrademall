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

export function SelectCategory() {
    const [selectedCategory, setSelectedCategory] = useState<string | ''>('')
  return (
    <div className="mb-36">
      <input type="hidden" name="categoryName" value={selectedCategory as string}/>
      {categoryItems.map(
        (item) =>
          item.name === "comradeBNB" &&
          item.category.map((item1) => (
            <div key={item1.id} className="w-1/2 mx-auto my-6 ">
              <Card className={selectedCategory === item1.name? "border-primary" : ""}
              onClick={()=>setSelectedCategory(item1.name)}
              >
                <CardHeader>
                  <h3 className="flex items-center justify-center font-medium text-green-600">{item1.title}</h3>
                </CardHeader>
              </Card>
            </div>
          ))
      )}
    </div>
  );
}
