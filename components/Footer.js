import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';

const Footer = () => {
    return (
        <div>
            <footer className="text-gray-600 body-font ">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <Link href={'/'} className="flex title-font font-medium items-center text-purple-900 md:mb-0">
                        <Image src="/logo.png" alt="Picture of the author" width={180} height={10} />
                    </Link>
                    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 BusKaro</p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <Link href={'https://github.com/PRAMOD222'}><FaGithub className='mx-2 cursor-pointer text-xl' /></Link>
                        <a href={'https://www.linkedin.com/in/pramod-kesarkar-38b87922a'}><FaLinkedinIn className='mx-2 cursor-pointer text-xl' /></a>
                        <Link href={'/'}><GrInstagram className='mx-2 cursor-pointer text-xl' /></Link>
                    </span>
                </div>
            </footer>
        </div>
    )
}

export default Footer
