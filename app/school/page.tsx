"use client";
import { Button } from "@/components/ui/button";
import { createSchool } from "../actions";
import { redirect } from "next/navigation";
import getAllSchools from "../lib/getAllSchools";
import useSWR from "swr";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Schoolpage() {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const [school, setSchool] = useState("");
  const { data, mutate } = useSWR("schools", getAllSchools);
  const router = useRouter()
  const handleSubmit = async() => {
   const school1 = await createSchool(school)
   if(school1){
    mutate(getAllSchools)
   }
  };

  return (
    <>
     
      <div className="w-3/4 flex flex-col mt-24 mx-auto">
      <label htmlFor="school">Enter School: </label>
      <Input
        type="text"
        name="school"
        onChange={(e) => setSchool(e.target.value)}
        required
      />
      <Button className="mt-6" onClick={handleSubmit}>Submit</Button>
      </div>
      <div className="flex flex-col mt-8">
        <h2>Schools</h2>
        <ul>
            {!data && <p>No Schools</p>}
          {data && data.map((s)=>(
            <li key={s.id}>{s.name}</li>
          ))
}
        </ul>
      </div>
    </>
  )
}
