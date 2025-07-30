import React, { useContext, useEffect, useState } from 'react';
import { FaHome } from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import logo from '../../src/bash_logo.png';
import { IoMdSunny } from "react-icons/io";
import { IoMdMoon } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import MobileMenu from './MobileMenu';
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import {DarkModeContext} from "../../src/context/DarkModeContext";
 
const Navbar = () => {
  const [open,setOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const {isDarkmode, darkModecheck} = useContext(DarkModeContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    }
   window.addEventListener('scroll',handleScroll);
   return () => window.removeEventListener('scroll', handleScroll);

  }, [])
  

  return (
    <>
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-md bg-white/10 shadow-md'
          : 'bg-transparent'
      }`}
    >
        <div className="container mx-auto flex justify-between items-center px-3">
            {/*menu section*/}
            <div className='flex items-center justify-between '>
              <img alt='logo' src={logo} width={50} height={50}/>
            </div>
            {/*menu section*/}
            <div className='hidden md:block'>
                <ul className='flex items-center gap-6 text-gray-600'>
                  <li><Link to='/' className='inline-flex items-center gap-1 py-1 px-2 hover:text-primary font-semibold align-middle dark:text-gray-300 dark:hover:text-yellow-400 dark:transition duration-300'><FaHome />Home</Link></li>
                  <li><Link to='/about' className='inline-flex items-center gap-1 py-1 px-2 hover:text-primary font-semibold align-middle dark:text-gray-300 dark:hover:text-yellow-400 dark:transition duration-300'><IoInformationCircle />About Us</Link></li>
                  <li><Link to='/contact' className='inline-flex items-center gap-1 py-1 px-2 hover:text-primary font-semibold align-middle dark:text-gray-300 dark:hover:text-yellow-400 dark:transition duration-300'><BsFillTelephoneFill />Contact Us</Link></li>
                </ul>
            </div>
      {/*Buttons and icons*/}
      {/* Social media icons */}
            <div className='flex items-center gap-3'>
              <a href='https://github.com/bash20/' target='_blank' rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub className='h-5 w-5 hover:scale-105 transition duration-200 dark:text-white' />
              </a>
              <a href='https://www.instagram.com/s_n_barmeda17?igsh=ZWl0bXl6eGNzNGx5' target='_blank' rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className='h-5 w-5 hover:scale-105 transition duration-200 dark:text-white' color="#E4405F" />
              </a>
              <button
                type="button"
                className={`flex items-center ml-4 px-4 py-2 rounded-full border transition-all
                  ${isDarkmode
                    ? 'border-yellow-500 bg-gray-800 hover:bg-gray-700'
                    : 'border-blue-500 bg-gray-100 hover:bg-gray-200'}`}
                aria-label="Toggle dark mode"
                onClick={() => darkModecheck()}
              >
                {isDarkmode ? (
                  <IoMdSunny className="text-yellow-500 text-xl" />
                ) : (
                  <IoMdMoon className="text-blue-500 text-xl" />
                )}
              </button>

            </div>

            {/*Menu for mobile screen */}
            <div className='md:hidden' onClick ={()=>setOpen(!open)}>
              <MdMenu className='text-3xl dark:text-white'/>
            </div>
        </div>
    </nav>
    
    {/*mobile menu*/}
    <MobileMenu open={open}/>
    </>
  )
}

export default Navbar