import React, { useEffect, useState, useContext } from "react";
import { PlusIcon } from '@heroicons/react/solid';
import ThemeContext from '../context/ThemeContext';
import { auth, provider } from "../util/FirebaseConfig";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [value, setValue] = useState('');

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setValue(data.user.email);
        localStorage.setItem("email", data.user.email);
      })
      .catch((error) => {
        console.log("Error signing in with popup:", error);
      });
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    setValue(storedEmail);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      className={`rounded-lg border-1 border-neutral-400 p-2 
                  absolute right-8 xl:right-12 shadow-lg 
                  ${darkMode ? "shadow-gray-100" : null}`}
      onClick={handleClick}
    >
      <PlusIcon
        className={`h-8 w-8 cursor-pointer stroke-1 fill-none stroke-neutral-400
                    ${darkMode
                      ? "fill-yellow-500 stroke-yellow-400"
                      : "fill-none stroke-neutral-400"
                    }`}
      />
    </button>
  );
};

export default Login;
