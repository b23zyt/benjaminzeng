"use client"

import Image from "next/image";
import Link from "next/link"
import { useState } from "react";
import NavLink from "./navLink";

const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" },
  ];
  

const Navbar = () => {

    //create a state to determine whether the menu is opened
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    }
    
    return <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 text-xl">

        {/* navigation bar */}
        <div className="hidden md:flex gap-4 w-1/3 text-xl">
            {
                links.map(link => (
                    <NavLink link={link} key={link.title}/>
                ))
            }
        </div>

        {/* website logo */}
        <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
            <Link href="/" className="text-sm bg-purple-800 rounded-md p-1.5 font-semibold flex items-center justify-center" >
                <span className="text-blue-200 mr-1">Zeng</span>
                <span className="w-9 h-8 rounded bg-blue-200 text-purple-800 flex items-center justify-center">.ca</span>
            </Link>
        </div>

        {/* social media icons */}
        <div className="hidden md:flex justify-center gap-4 w-1/3 ">
            <Link href="https://github.com/b23zyt">
                <Image src="/github.png" alt="github icon" width={24} height={24}/>
            </Link>
            <Link href="https://github.com/b23zyt">
                <Image src="/linkedin.png" alt="github icon" width={24} height={24}/>
            </Link>
            <Link href="https://github.com/b23zyt">
                <Image src="/instagram.png" alt="github icon" width={24} height={24}/>
            </Link>
            <Link href="https://github.com/b23zyt">
                <Image src="/facebook.png" alt="github icon" width={24} height={24}/>
            </Link>
        </div>

            {/* menu */}
        <div className="md:hidden">
            <button className="w-10 h-8 flex flex-col justify-between z-50 relative " onClick={handleClick}>
                <div className="w-10 h-1 bg-black rounded "></div>
                <div className="w-10 h-1 bg-white rounded "></div>
                <div className="w-10 h-1 bg-black rounded "></div>
            </button>

            {/* menu list */}
            {open && <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-30" >
                {links.map(link => (
                    <Link href={link.url} key={link.title}>{link.title}</Link>
                ))}
            </div>}
            
        </div>

    </div>
}

export default Navbar