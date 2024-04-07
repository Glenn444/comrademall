// import { CreateDescription } from "@/app/actions";
// import CreateBottomBar from "@/app/components/CreateBottomBar";
// import checkAuth from "@/app/lib/checkAuth";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { redirect } from "next/navigation";
export default function Descriptionpage() {
    return (
      <div>
        Welcome to create Description page
      </div>
    )
  }
// export default async function DescriptionPage({params}:{params:{id:string}}) {
 
 
//   return (
//     <>
//       <div className="w-3/5 mx-auto">
//         <h2 className="text-3xl font-semibold tracking-tight transition-colors">
//           Please describe your House
//         </h2>
//       </div>
//       <form action={CreateDescription}>
//         <input type="hidden" name="homeId" value={params.id} />
//         <div className="mx-auto w-3/5 mt-10 flex flex-col gap-y-5 mb-36">
//           <div className="flex flex-col gap-y-2">
//             <Label>Title</Label>
//             <Input name="title" required placeholder="Short and simple" />
//           </div>
//           <div className="flex flex-col gap-y-2">
//             <Label>Description</Label>
//             <Textarea
//               name="description"
//               required
//               placeholder="Please describe your house..."
//             />
//           </div>
//           <div className="flex flex-col gap-y-2">
//             <Label>Price</Label>
//             <Input
//               name="price"
//               type="number"
//               required
//               placeholder="Price per Night in Ksh"
//               min={100}
//             />
//           </div>
//           <div className="flex flex-col gap-y-2">
//             <Label>Image inside your house</Label>
//             <Input name="image" type="file" required />
//           </div>
//         </div>
//         <CreateBottomBar />
//       </form>
//     </>
//   );
// }


