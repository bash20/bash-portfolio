import React from 'react'
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] dark:bg-[#1e1b00] text-white py-8 clip-diagonal transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <h2 className="text-2xl font-semibold">Barmeda Shreyansh</h2>

        {/* Navigation */}
        <nav>
          <ul className="flex flex-wrap gap-8 text-sm font-medium">
            <li>
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 hover:text-gray-400 transition-colors duration-300"
              >
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="inline-flex items-center gap-2 hover:text-gray-400 transition-colors duration-300"
              >
                <IoInformationCircle /> About Us
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 hover:text-gray-400 transition-colors duration-300"
              >
                <BsFillTelephoneFill /> Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-6">
          <a 
            href="https://github.com/bash20/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub"
            className="text-white hover:text-primary transition transform hover:scale-110"
          >
            <FaGithub className="h-6 w-6" />
          </a>
          <a 
            href="https://www.instagram.com/s_n_barmeda17?igsh=ZWl0bXl6eGNzNGx5" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Instagram"
            className="text-white hover:text-[#E4405F] transition transform hover:scale-110"
          >
            <FaInstagram className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-700 my-6 max-w-6xl mx-auto" />

      {/* Copyright */}
      <p className="text-center text-gray-400 text-sm max-w-6xl mx-auto px-4">
        &copy; {new Date().getFullYear()} Barmeda Shreyansh. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer;
