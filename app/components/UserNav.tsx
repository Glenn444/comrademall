/* eslint-disable @next/next/no-img-element */
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { createComradeBNB, CreateProduct } from "../actions";
import getSchoolId from "../lib/getSchoolId";
import { SignOutButton } from "./auth/SIgnOut";
import { auth, currentUser } from "@clerk/nextjs";
import { UserProfile } from "@clerk/nextjs";
const UserNav = async () => {
  const schoolId = await getSchoolId()
  const { userId } = auth();
  let user
  if(userId){
  user = await currentUser();
  }
  const createId = createComradeBNB.bind(null, {
    userId: userId as string
  })
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="rounded-full border p-2 lg:px-4 lg:py-2 flex items-center  gap-x-3">
          <MenuIcon className="w-6 h-6 hide-icon  lg:w-5 lg:h-5" />

          <img
            src={
              user?.imageUrl ??
              "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAqQMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAABAYHBQMB/8QAOBAAAQQAAwQGCQIHAQAAAAAAAAECAwQFESEGQVGREjEyccHRFCJCUlNhgaGxEyMzQ2Jyc+HwFv/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8A1IAGmQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGpHu3K9Gus9mVGMTROKrwTiVLENr7Uj1bRibAz3np0nr4J9wLqNTNlx7Fld0vT5c/ll5E+jtbehciWmssx9yNdzTyAvQIeG4lVxKH9Ss/VvbYvab3oTAAAAAAAAAAAAAAAAAAAAHlZsRVa8k865Rxtzcp6lU25uq1kFKN2jv3H5cE7Kc81+gFcxfEpsUuOnlVUb1Rsz0YnmQt2Q8AVAAFHvRtzULLLFZ/RexfoqcFNKwy9FiNKOzDojk1avW1d6GXFk2IurHfkpud6kzc2ou5yeaZ8jKruAAAAAAAAAAAAAAAAAABn+2D1fjkqbmsaicjQCgbZM6ONvXc6Nipyy8AOGADSAAAE/AXrHjNNyfFROehAOjs8xZMbponxEXlr4GVaUAAAAAAAAAAAAAAAAAABU9u6jlZWuNb2c43/LPVPEth43K0VytJXnRVjkb0V1AyoE3FcMnwuysUzVVir+3InZenn8iEUAANTAsuw9RZcRktKnqQs6KL/U7/AFnzOFRpT37DYKsavevJqcVXcho+FUIsNpMrRa5aud7zl61IqYAAAAAAAAAAAAAAAAAAAAA8rEENmJ0ViJsjHey5DgWtjqcq51p5YF4dtPvkd21cq1EztWIok4PciLy6zlTbVYXHo18kv9jF8QOUuxcmel9mX+JfMlVtjazHItm1LKnusRGJ4qen/sqOf8CxyTzPaLazC3rk5Zovm5mafYDq06dalD+lVhZG3flv713kgi1MRpXUT0W1DIvutcmfLrJQAAAAAAAAAAAAAAAAAA5+M4rDhVX9STJ0jtI489XL5Ae9+9WoQLNakRjd3Fe5Cm4ntVbsq5lNPRouKL66/Xcce/dsX7Dp7UivcvUm5qcETchHA+vc571e97nOXrVy5qp8AKgAC4CZoqKiqipvQ7eG7TXqStbKvpMPUrZF9ZO5TiAg03CsUq4nD06z/WTtMdo5veTjKK9iarM2avI6OVvZc00DZ/G48VhVj+jHaYmbmJpmnFCK64AAAAAAAAAAAADxt2I6laSxM7osjarlUzXFL82JXH2Z9M9Gt91OBYdt76ufFh8bvVTJ8mXHci/9vQqYAAFiUABQAAAAAD1qWZaliOxXd0ZI3Zop5AlWNPwq/HiVGOzHp0tHN9129CYUTY2+tbEFqvdlFY0TPqR27y5F7IAAAAAAAAB8XL2tE4n0h4vKsGF25G9aQuy/AGcYjZddv2LLv5siuRF3Ju+2RHALEoACgAAAAAAAAABSPrHPje18a5PaqOavzQ1WrO21WisM6pWI/uzTMyk0TZSVZcCr5+x0mclIrrgAgAAAAABzNpVywK5l8NfygAGbgAsZAAVQAAAAAAAAAAC+7FLngvdK/wDKAEo7wAIoAAP/2Q=="
            }
            alt="User Image"
            className="rounded-full h-8 w-8 default-user"
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[150px] mt-1 mr-4">
        {userId ? (
          <>
            <DropdownMenuItem>
            <form action={CreateProduct} className="w-full">
                <button className="w-full text-start">
                Sell Products
                </button>
                </form>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <form action={createId} className="w-full">
                <button className="w-full text-start">
                comradeBNB
                </button>
                </form>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={`/${schoolId?.schoolsId}/dashboard`} className="w-full">
                Dashboard
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <SignOutButton />
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem>
               <Link href="/sign-up">Register </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/sign-in">Login </Link>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserNav;
