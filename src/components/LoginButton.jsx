import React, { useEffect, useState, useContext } from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import ThemeContext from "../context/ThemeContext";
import { auth, provider } from "../util/FirebaseConfig";
import {
  signInWithPopup,
  setPersistence,
  browserLocalPersistence,
  getAuth
} from "firebase/auth";
import { toast } from "react-toastify";

const Login = ({ loginFunc }) => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [value, setValue] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleClick = () => {
    if (isLoggedIn) {
      setPersistence(auth, browserLocalPersistence)
        .then(() => {
          return signInWithPopup(auth, provider);
        })
        .then((data) => {
          const user = getAuth().currentUser;
          setValue(data.user.email);
          localStorage.setItem("email", data.user.email);
          setIsLoggedIn(false);
          toast.success("Successfully logged in");
          loginFunc(isLoggedIn); // Pass isLoggedIn as true to the parent component
        })
        .catch((error) => {
          console.log("Error signing in with popup:", error);
          toast.error("Error signing in");
        });
    } 
    else {
      toast.error("Already logged in");
    }
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    setValue(storedEmail);
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <button
      className={`rounded-lg border-1 border-neutral-400 p-2 
                  absolute right-8 xl:right-12 shadow-lg 
                  ${darkMode ? "shadow-gray-100" : null}`}
      onClick={handleClick}
    >
      <LockClosedIcon
        className={`h-8 w-8 cursor-pointer stroke-1 fill-none stroke-neutral-400
                    ${
                      darkMode
                        ? "fill-yellow-500 stroke-yellow-400"
                        : "fill-none stroke-neutral-400"
                    }`}
      />
    </button>
  );
};

export default Login;
