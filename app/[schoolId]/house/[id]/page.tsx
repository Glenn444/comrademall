export default function page() {
    return (
      <div>
        Page is currently unavailable
      </div>
    )
  }


// import checkAuth from '@/app/lib/checkAuth';
// import { Separator } from '@/components/ui/separator';
// import prisma from '@/lib/db'
// import Image from 'next/image';
// import { redirect } from 'next/navigation';
// import React from 'react'
// import {unstable_noStore as noStore} from "next/cache"
// async function getData(homeid:string){
//   noStore();
//   const data = await prisma.home.findUnique({
//     where:{
//       id:homeid
//     },
//     select:{
//       photo:true,
//       id:true,
//       price:true,
//       categoryName:true,
//       description:true,
//       User:{
//         select:{
//           name:true,
//           phone:true,
//           school:{
//             select:{
//               id:true,
//               name:true
//             }
//           }
//         }
//       }
//     }
//   });
//   return data;
// }
// export default async function HouseRoute({params}:{params:{id:string}}) {
//   const isAuth = await checkAuth();
//   const data = await getData(params.id)
//   return isAuth ? (
//     <div className='w-[75%] mx-auto mt-10'>
//       <h2 className='font-medium text-2xl mb-5'>{data?.categoryName}</h2>
//       <div className='relative h-[550px]'>
//         <Image alt='image of home'  fill src={`https://tpqmvytjsrwdcohagklq.supabase.co/storage/v1/object/public/images/${data?.photo}`}
//         className='rounded-lg h-full object-cover w-full'
//       />
//       </div>
//       <div className='flex justify-between gap-x-24 mt-8'>
//         <div className='w-2/3'>
//             <h3 className='text-xl font-medium'>{data?.User?.school?.name}</h3>
//             <div className=' mt-6'>
//                 <h3>Hosted by: {data?.User?.name}</h3>
//                 <p>Host Phone: {data?.User?.phone}</p>
//             </div>
//             <div >
//               <Separator />
//               <div className='flex flex-col my-4'>
//               <h3>Description</h3>
//               <p className='text-sm'>{data?.description}</p>
//               </div>
//             </div>
//         </div>
//       </div>
//     </div>
//   ): redirect('/')
// }



