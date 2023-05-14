import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { BsMoonStarsFill, BsPersonCircle} from 'react-icons/bs';

const Navbar = () => {
  return (
    <div className='sticky'>
        <header className="text-purple-600 body-font ">
          <div className="container mx-auto flex flex-wrap p-4 flex-col sm:flex-col md:flex-row items-center shadow-md">
            <Link href={'/'} className="flex title-font font-medium items-center  md:mb-0">
              <Image src="/logo.png" alt="Picture of the author" width={180} height={10}/>
            </Link>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center ">
              <Link href={'/trackBus'} className="mr-5 hover:text-purple-800 font-semibold">Track Your Bus</Link>
              <a href={'/myfile.html'} className="mr-5 hover:text-purple-800 font-semibold">Time Table</a>
              <Link href={'/tickets'} className="mr-5 hover:text-purple-800 font-semibold">Tickets</Link>
              <Link href={'/contact'} className="mr-5 hover:text-purple-800 font-semibold">Contact Us</Link>
              <Link href={'/aboutUs'} className="mr-5 hover:text-purple-800 font-semibold">About Us</Link>
            </nav>

            <Link href={'/Login'}><BsPersonCircle className="mx-2 my-4s text-xl"/></Link>
            <Link href={'/testchatgpt'}><BsMoonStarsFill className="mx-2 my-4s text-xl"/></Link>
          </div>
        </header>
      
    </div>
  )
}

export default Navbar
