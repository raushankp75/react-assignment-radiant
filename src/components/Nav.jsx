import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import navmenu from './navmenu.json'
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const NavLinks = ({ close }) => {

    // changing active links
    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? "Bold" : "normal",
            borderBottom: isActive ? "2px solid #1B88F4" : "",
            color: isActive ? "#999" : ""
        }
    }

    return (
        // Map menu here
        navmenu.map((nav, index) => (
            <NavLink key={index} to={nav.link} onClick={close} className='text-[#D1D6DA]' style={navLinkStyles}>{nav.menu}</NavLink>
        ))
    )
}

const Nav = () => {

    const [isOpen, setIsOpen] = useState(false)

    // For mobile device toggle menu function
    const toggleNavbar = () => {
        setIsOpen(!isOpen)
    }



    return (
        <>
            <nav>
                <div className='hidden md:flex justify-between gap-16 text-[14px] font-[400] leading-[20px]'>
                    <NavLinks />
                </div>

                <div className='md:hidden'>
                    <button onClick={toggleNavbar} className='text-3xl flex bg-transparent outline-none border-none text-[#D1D6DA]'>
                        {isOpen ? <RxCross2 /> : <IoMdMenu />}
                    </button>
                </div>
            </nav>

            {isOpen && (
                <div className='flex basis-full flex-col items-center gap-5 absolute top-[60px] left-0 bg-[#212731] w-full p-14'>
                    <NavLinks close={toggleNavbar} />
                </div>
            )}
        </>
    )
}

export default Nav