"use client"
import UserDetails from "../components/FormUser";
import getAllSchools from "../lib/getAllSchools"
import { useEffect, useState } from 'react';
import { useAuth } from "@clerk/nextjs";
type schoolType = {
  id: string;
  name: string;
}[]
function User() {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const [schools, setSchools] = useState<schoolType>([]);
 
  useEffect(() => {
    async function fetchData() {
      const schoolsData = await getAllSchools();
      setSchools(schoolsData);
    }

    fetchData();
  }, []);
  return (
    <>
    <UserDetails schools={schools} />
    </>
  )
}

export default User
