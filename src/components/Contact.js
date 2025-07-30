import React, { useContext, useRef } from 'react';
import Contactbackgnd from './Contactbackgnd';
import { DarkModeContext } from '../context/DarkModeContext';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const darkmode = useContext(DarkModeContext);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_c9z4uas',         
      'template_u4k1qja',        
      form.current,
      'gb8WrFDhU9joeI1wS'        
    )
    .then(
      (result) => {
        toast.success("Message sent successfully!");
      },
      (error) => {
        toast.error("Failed to send message." + error);
      }
    );

    e.target.reset(); // optional: clear form after submit
  };

  return (
    <div className=" py-4 px-[10vw] md:px-[10vw]">
      <Contactbackgnd />

      <div className="flex justify-center items-center mb-4">
        <h2 className="text-primary text-xl dark:text-white">CONTACT</h2>
      </div>

      <div className="flex justify-center items-center">
        <div className="backdrop-blur-sm bg-white/10 border border-primary dark:border-yellow-400 p-6 rounded-md shadow-md max-w-md w-full text-center">
          <h3 className="text-md text-black mb-2 dark:text-yellow-400">CONTACT ME</h3>

          <form className='mt-4 space-y-4' ref={form} onSubmit={sendEmail}>
            <input type='email' name='sender_email' placeholder='Your Email' required
              className='w-full rounded-md p-3 border border-gray-500 focus:outline-none focus:border-purple-500 dark:focus:border-yellow-400 dark:bg-[#3a3000] dark:text-white'
            />
            <input type='text' name='sende_name' placeholder='Your Name' required
              className='w-full rounded-md p-3 border border-gray-500 focus:outline-none focus:border-purple-500 dark:focus:border-yellow-400 dark:bg-[#3a3000] dark:text-white'
            />
            <input type='text' name='subject' placeholder='Subject' required
              className='w-full rounded-md p-3 border border-gray-500 focus:outline-none focus:border-purple-500 dark:focus:border-yellow-400 dark:bg-[#3a3000] dark:text-white'
            />
            <textarea name='message' placeholder='Message' rows={4}
              className='w-full rounded-md p-3 border border-gray-500 focus:outline-none focus:border-purple-500 dark:focus:border-yellow-400 dark:bg-[#3a3000] dark:text-white'
            ></textarea>
            <button
              type='submit'
              className={`w-full p-2 rounded-md ${darkmode.isDarkmode
                ? "bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600"
                : "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
              }`}
            >
              SEND
            </button>
          </form>
        </div>
      </div>
      <ToastContainer
        position='top-center'
        autoClose = {3000}
        theme={darkmode.isDarkmode?'dark':'colored'}
      />

    </div>
  );
};

export default Contact;
