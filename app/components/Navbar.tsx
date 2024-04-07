import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import DesktopLogo from '../../public/desktopcm.png'
import logo from '../../public/clogo.png'
import UserNav from './UserNav'
import { Search } from 'lucide-react'


const Navbar = () => {
  return (
    <nav className='w-full border-b'>
        <div className='flex items-center justify-between container mx-auto px-5 lg:px-10 py-5'>
            <Link href="/">
                <Image src={DesktopLogo} alt='Desktop Logo' className='w-36 hidden lg:block'/>
                <Image src={logo} alt='Mobile Logo' className='w-12 lg:hidden'/>
            </Link>
            <div className='rounded-full border px-5 py-2 flex justify-between lg:w-1/3 gap-6 '>
                <h1 className='flex items-center'>Search</h1>
                <Search className='bg-primary text-white p-1 h-8 w-8 rounded-full' />
            </div>
            <UserNav />
        </div>

    </nav>
  )
}

export default Navbar
