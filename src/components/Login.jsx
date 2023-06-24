import React, { useContext } from "react";
import { PlusIcon } from "@heroicons/react/solid";
import ThemeContext from "../context/ThemeContext";
const Login = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <button
      className={`rounded-lg border-1 border-neutral-400 p-2 
                      absolute right-8 xl:right-12 shadow-lg 
                      ${darkMode ? "shadow-gray-800" : null}`}
    >
      <PlusIcon
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

//  <button className="rounded-lg border-1 border-neutral-400 p-2 absolute right-8 xl:right-12 shadow-lg">
// <PlusIcon className="h-8 w-8 cursor-pointer stroke-1 fill-none stroke-neutral-400" />
