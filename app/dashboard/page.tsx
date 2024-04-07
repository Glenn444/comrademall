import prisma from "@/lib/db"
import {unstable_noStore as noStore} from "next/cache"
import { auth, currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Dasboard from "../components/Dashboard";
import getSchoolId from "../lib/getSchoolId";
import Link from "next/link";
import { Button } from "@/components/ui/button";

async function getUserPhone(){
  const { userId } = auth();
  const user = await prisma.user.findUnique({
    
    where:{
      id:userId ?? undefined
    },
    select:{
      phone:true
    }
  });
  return user;
}
export default async function Dashboardpage() {
  const user = await getUserPhone();
  const schoolId = await getSchoolId();
  if (!user?.phone){
    return redirect('/userdetails');
  }
  return redirect(`/${schoolId?.schoolsId}`);
  // return (
  //   <>
  //   <Dasboard/>
  //   <Button className="w-full"><Link href={`/${schoolId?.schoolsId}`}>Home</Link></Button>
  //   </>
  // )
}
