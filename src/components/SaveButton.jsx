import React, { useEffect, useState, useContext } from "react";
import { BookmarkIcon } from '@heroicons/react/solid';
import ThemeContext from '../context/ThemeContext';
import { auth, provider } from "../util/FirebaseConfig";
import { signInWithPopup } from "firebase/auth";
import {toast} from 'react-toastify';

const SaveButton = ({ isLoggedIn }) => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [value, setValue] = useState('');

  const handleClick = () => {
    if (!isLoggedIn) {
      toast.error("Please login to save stocks");
      return;
    }
  };

  return (
    <button
      className={`rounded-lg border-1 border-neutral-400 p-2 
                  absolute right-64 xl:right-64 shadow-lg 
                  ${darkMode ? "shadow-gray-100" : null}`}
      onClick={handleClick} // Pass the function reference without invoking it
    >
      <BookmarkIcon
        className={`h-8 w-8 cursor-pointer stroke-1 fill-none stroke-neutral-400
                    ${darkMode
                      ? "fill-yellow-500 stroke-yellow-400"
                      : "fill-none stroke-neutral-400"
                    }`}
      />
    </button>
  );
};


export default SaveButton;
