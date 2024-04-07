
import getSchoolId from "@/app/lib/getSchoolId"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { redirect } from "next/navigation";

const SuccessPage = async() => {

  const schoolId = await getSchoolId();
 
  return (
    <div className="flex flex-col justify-center items-center mt-32 lg:w-1/2 mx-auto">
      <h2>Submitted your house successfuly</h2>
      <p>You are only allowed to create one House for booking</p>
      <p>Navigate to home Page Category comradeBNB to see your house</p>
        <Button><Link href={`/${schoolId?.schoolsId}`}>Home</Link></Button>
    </div>
  )
}

export default SuccessPage
