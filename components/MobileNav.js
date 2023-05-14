import Link from 'next/link'
import { useState } from 'react';
import Image from "next/image";
import { BsMoonStarsFill, BsPersonCircle } from 'react-icons/bs';


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-purple-600 body-font">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    {isOpen ? (
                        <path
                            fillRule="evenodd"
                            d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                    ) : (
                        <path
                            fillRule="evenodd"
                            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                    )}
                </svg>
            </button>
            <aside className={`bg-gray-800 ${isOpen ? "block" : "hidden"} md:block fixed z-40 top-0 left-0 h-screen w-72`}>
                <div className="px-4 py-2">
                    <button onClick={() => setIsOpen(false)} className="float-right text-purple-600 body-font">
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                            <path
                                fillRule="evenodd"
                                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                            />
                        </svg>
                    </button>
                    <Link onClick={() => setIsOpen(false)} href={'/'} className="flex title-font font-medium items-center  md:mb-0">
                        <Image src="/logo.png" alt="Picture of the author" width={180} height={10} />
                    </Link>
                    <nav className="flex flex-col text-purple-600 body-font">
                        <Link onClick={() => setIsOpen(false)} href={'/trackBus'} className="mr-5 font-semibold px-4 py-6 text-2xl">Track Your Bus</Link>
                        <Link onClick={() => setIsOpen(false)} href={'/myfile.html'} className="mr-5 font-semibold px-4 py-6  text-2xl">MapPage</Link>
                        <Link onClick={() => setIsOpen(false)} href={'/tickets'} className="mr-5 font-semibold px-4 py-6  text-2xl">Tickets</Link>
                        <Link onClick={() => setIsOpen(false)} href={'/contact'} className="mr-5 font-semibold px-4 py-6  text-2xl">Contact Us</Link>
                        <Link onClick={() => setIsOpen(false)} href={'/aboutUs'} className="mr-5 font-semibold px-4 py-6  text-2xl">About Us</Link>
                        <div className='flex flex-row'>
                            <Link onClick={() => setIsOpen(false)} href={'/Login'}><BsPersonCircle className="mx-4 my-4 text-2xl" /></Link>
                            <BsMoonStarsFill className="mx-4 my-4 text-2xl" />
                        </div>
                    </nav>

                </div>
            </aside>
        </>
    )
}
export default Sidebar
