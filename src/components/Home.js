import React, { useContext } from 'react';
import { FaEye } from "react-icons/fa";
import image from "../assets/my_image.jpg";
import Skill from './Skill';
import { DarkModeContext } from '../context/DarkModeContext';



const Home = () => {
 const darkmode = useContext(DarkModeContext)
  return (<>
    <section className='py-4 px-[10vw] md:px-[10vw] dark:bg-black '>
      <div className='flex flex-col-reverse md:flex-row justify-between items-center'>

        {/*Left Side*/}
        <div className='md:w-1/2 mt-8 md:mt-24 text-center md:text-left'>
          <span className='text-xl text-gray-600 mb-3 block dark:text-gray-400'>Hey there!</span>
          <h1 className='text-4xl md:text-6xl font-bold text-primary dark:text-yellow-400 '>Hi,I'm Shreyansh</h1>
          <span className='text-3xl text-black mt-3 block dark:text-white'>A Web Developer</span>

          {/*About Paragraph*/}
          <p className='text-base md:text-lg sm:text-lg text-gray-700 mt-8 leading-relaxed dark:text-gray-400'>
            I am a backend developer with 1.5 years of experience in PHP, MySQL, and jQuery.
            I specialize in building full-stack applications using HTML, CSS, JavaScript, and Bootstrap.
            Currently, I am learning the MERN stack to expand my skills in modern web development.
          </p>

           {/*Button section*/}
            <a
            href='https://drive.google.com/file/d/16OWB6lQeMDeUJi7Rx1rmupTKlbbps8V1/view?usp=drive_link'
            target='_blank'
            rel='noopener noreferrer'
            className={`inline-block text-white px-6 py-2 md:px-8 md:py-3 mt-5 text-lg rounded-full transition duration-300 hover:scale-105 font-semibold
              ${darkmode.isDarkmode 
                ? 'bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600'
                : 'bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500'
              }`}
          >
            <FaEye className='inline-block mr-2' />
            SEE MY RESUME
          </a>


        </div>

        {/*Right Side */}
        <div className='md:w-1/2 flex justify-center'>
          <img alt='' src={image} className={`relative w-60 h-60 sm:w-60 sm:h-60 md:w-90 md:h-90 lg:w-80 lg:h-80 rounded-full object-cover ${darkmode.isDarkmode ? "shadow-[0_0_15px_#fde047] hover:shadow-[0_0_25px_#fde047]" : "shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:scale-105 transition duration-300" }`}></img>
        </div>
      </div>
    </section>
    <Skill/>
    </>
  )
}

export default Home
