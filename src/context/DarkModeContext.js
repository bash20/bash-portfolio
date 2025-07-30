import React, { createContext, useState } from 'react';

export const DarkModeContext = createContext();

const DarkModeProvider = ({children}) => {
    const [isDarkmode, setIsDarkmode] = useState(false);
    const darkModecheck = () => {

    setIsDarkmode(!isDarkmode);
    document.documentElement.classList.toggle('dark'); 
  }
  return (
   <DarkModeContext.Provider value={{isDarkmode,darkModecheck}}>
        {children}
   </DarkModeContext.Provider>
  )
}

export default DarkModeProvider