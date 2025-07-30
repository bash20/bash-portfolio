import React from 'react';
import SkillInfo from './constants';
import Starbackground from '../components/Starbackground'; // adjust path

const Skill = () => {
  return (
    <div className='relative py-8 px-[10vw] text-black bg-white clip-wave dark:bg-black'>
      <Starbackground/>
  
      {/* Title */}
      <div className='text-center mt-10 mb-10'>
        <h2 className='text-3xl font-bold dark:text-white'>SKILLS</h2>
        <div className='h-1 w-16 bg-purple-600 mx-auto mt-2 dark:bg-yellow-400'></div>
        <p className='text-gray-400 mt-3'>
          Technical skills that I have learned from projects and internships.
        </p>
      </div>


      {/* Skill categories */}
      <div className='flex flex-wrap gap-6 justify-center'>
        {SkillInfo.map((category) => (
            <div className='border border-primary dark:border-yellow-400 p-6 rounded-lg shadow-md w-[280px] sm:w-[370px] text-center text-black'>
              <h3 className='text-xl font-semibold mb-2 text-purple-400 dark:text-yellow-400'>{category.title}</h3>
              <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 w-full'>
                {category.skills.map((skill) => 
                <div className='flex justify-center items-center space-x-2 border-2 rounded-lg border-black dark:border-gray-400 px-2 py-2 sm:px-1 py-1 text-center'>
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className='w-4 h-4 sm:w-5 sm:h-5 object-contain'
                  ></img>
                  <span className='text-sm text-gray-600 dark:text-white'>{skill.name}</span>
                </div>
                )}
              </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
