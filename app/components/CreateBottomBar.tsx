import { Button } from "@/components/ui/button";
import { CreateSubmit } from "./SubmitButtons";
import Link from "next/link";
import getSchoolId from "../lib/getSchoolId";

const CreateBottomBar = async() => {
  const schoolId = await getSchoolId();
  return (
    <div className="fixed w-full bottom-0 z-10 bg-white border-t h-24">
      <div className="flex items-center justify-between mx-auto px-5 lg:px-10 h-full">
        <Button variant="secondary" size="lg" className="text-red-500">
          <Link href={`/${schoolId?.schoolsId}`}>Cancel</Link>
        </Button>
        <CreateSubmit />
      </div>
    </div>
  );
};

export default CreateBottomBar;
