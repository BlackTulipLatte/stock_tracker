import React, { useContext } from 'react';
import { DatabaseIcon } from '@heroicons/react/solid';
import ThemeContext from '../context/ThemeContext';
import { toast } from 'react-toastify';

const SavedPageButton = ({isLoggedIn}) => {

  const {darkMode, setDarkMode} = useContext(ThemeContext);

  const handleClick = () => {
    if(!isLoggedIn){
        window.location.href = "/saved";
    }
    else{
        toast.error("Log in to view your saved stocks");
    }
  };

  return (
  <button className={`rounded-lg border-1 border-neutral-400 p-2 
                      absolute right-32 xl:right-96 shadow-lg 
                      ${darkMode ? "shadow-gray-100" : null}`}
                      onClick={handleClick}>
    
    <DatabaseIcon className={`h-8 w-8 cursor-pointer stroke-1 fill-none stroke-neutral-400
                          ${darkMode 
                            ? "fill-yellow-500 stroke-yellow-400" 
                            : "fill-none stroke-neutral-400"
                          }`} />
  
  </button>
  );
}

export default SavedPageButton