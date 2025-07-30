import {React, useContext, useState} from 'react';
import GST from '../assets/projects/gstcard.png';
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { DarkModeContext } from '../context/DarkModeContext';


const projectData = [
    {
        id:1,
        name: 'GST Invoice Generator',
        details : 'This made for one of my client Shyam Metal Industries. Using this portal they can generate GST Invoices.',
        projectImg : GST,
        bgcolor: 'orange'
    },
    {
        id:2,
        name: 'Luandry Managemant System',
        details : 'Using this a landry owner can manage whole data of all the customes datewise and can send monthly bill to his customer on his mobile number.',
        projectImg : GST,
        bgcolor: 'green'
    }
]

const educationData = [
  {
    id: 1,
    year: '2017-2018',
    title: '10th Standard',
    institution: 'One World School',
  },
  {
    id: 2,
    year: '2018 - 2020',
    title: '11th - 12th Science stream',
    institution: 'One World Higher Secondary School',
  },
  {
    id: 3,
    year: '2020 - 2024',
    title: 'B.E in Electronic & Communication Engineering',
    institution: 'Gujarat Technological University',
  },
];

const About = () => {
  const [angleDown, setIsAngleDown] = useState({
  });

const cardSelector = (id) => {
  setIsAngleDown((prevState) => ({
    ...prevState,
    [id]: !prevState[id]
  }));
};

const isCardExpanded = Object.values(angleDown).some(val => val === true);
const darkmode = useContext(DarkModeContext)

  return (
    <div className="relative px-4 py-10 max-w-4xl mx-auto">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold dark:text-white">Education</h2>
        <div className="h-1 w-32 mx-auto bg-primary dark:bg-yellow-400 mt-2"></div>
      </div>

      {/* Vertical line (desktop only) */}
      <div className="hidden sm:block absolute left-1/2 top-24 bottom-0 w-1 bg-primary dark:bg-yellow-400 transform -translate-x-1/2 z-0 h-[500px]"></div>

      {/* Timeline Items */}
      <div className="space-y-12 relative z-10">
        {educationData.map((item, index) => (
          <div
            key={item.id}
            className={`w-full sm:w-1/2 px-4 ${
              item.id % 2 === 0
                ? 'sm:pr-8 sm:text-right'
                : 'sm:pl-8 sm:ml-auto sm:text-left'
            }`}
          >
            <div className="bg-white dark:bg-[#2a2a00] p-4 shadow-md rounded-md border-l-4 sm:border-l-0 sm:border-r-4 border-primary dark:border-yellow-400">
              <p className="text-sm text-gray-500 dark:text-white">{item.year}</p>
              <h3 className="text-lg font-semibold dark:text-yellow-600">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.institution}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Projects Title */}
      <div>
        <h2 className='text-3xl text-center font-bold mt-16 dark:text-white'>My Projects</h2>
        <div className='h-1 w-32 bg-primary mx-auto mt-2 mb-4 dark:bg-yellow-400'></div>
      </div>

      {/* Projects Cards */}
<div className={`flex flex-wrap justify-center ${isCardExpanded ? 'items-start' : ''}  mt-6 gap-8`}>
  {projectData.map((project, index) => (
    <div
      key={index}
      className={`relative w-[250px] p-4 rounded-xl text-center shadow-lg border border-primary dark:border-yellow-400`}
    >
    <div className='w-full h-50 overflow-hidden'>
      <img
        src={project.projectImg}
        alt="project logo"
        className="w-full h-full object-cover"
      />
    </div>
      <div className="text-center">
        <h2 className="text-lg font-bold text-gray-800 dark:text-gray-400 mb-4">
          {project.name}
        </h2>
        <AnimatePresence initial={false}>
  {angleDown[project.id] && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden mb-2"
    >
      <p className="text-sm text-gray-500 dark:text-white">{project.details}</p>
    </motion.div>
  )}
</AnimatePresence>
      </div>
      <div className='flex justify-center'>
        <button className={`absolute bottom-[-16px] left-1/2 transform -translate-x-1/2 p-2 border border-black rounded-full ${darkmode.isDarkmode?"bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600":"bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"} text-white`} onClick={()=>cardSelector(project.id)}>{angleDown[project.id] ? <FaAngleUp/>:<FaAngleDown/>}  </button>
      </div>
    </div>
  ))}
</div>

      
    </div>
  );
};

export default About;
