import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";

const MobileMenu = ({ open }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute top-10 left-0 w-full h-screen z-20"
        >
          <div className='text-xl font-semibold uppercase backdrop-blur-md bg-primary/20 dark:bg-yellow-100/10 text-white py-10 m-6 rounded-3xl'>
            <ul className='flex flex-col justify-center items-center gap-10'>
              <li><Link to='/' className='inline-flex gap-2'><FaHome />Home</Link></li>
              <li><Link to='/about' className='inline-flex gap-2'><IoInformationCircle/>About Us</Link></li>
              <li><Link to='/contact' className='inline-flex gap-2'><BsFillTelephoneFill/>Contact Us</Link></li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
