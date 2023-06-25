import React, { useEffect, useState, useContext } from "react";
import { BookmarkIcon } from "@heroicons/react/solid";
import ThemeContext from "../context/ThemeContext";
import { auth, provider } from "../util/FirebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";
import { getDatabase, ref, set, push, get } from "firebase/database";

const SaveButton = ({ isLoggedIn, stockToBeSaved, UID }) => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [value, setValue] = useState("");

  // writes to the firebase database
  async function writeUserData(userId, stock) {
    const db = getDatabase();
    const stockObj = { stock };
    const userRef = ref(db, "users/" + userId);
  
    try {
      // Retrieve the current data from the database
      const snapshot = await get(userRef);
      const currentData = snapshot.val() || {}; // If no data exists, initialize as an empty object
  
      // Check if stock_obj already exists
      const stockArray = currentData.stock_obj ? currentData.stock_obj : [];
  
      // Append the new stock object to the stock array
      stockArray.push(stockObj);
  
      // Set the updated stock array back to the database
      set(userRef, {
        stock_obj: stockArray,
      });
  
      console.log("Data appended successfully!");
    } catch (error) {
      console.log("Error appending data:", error);
    }
  }

  // handle save button click
  const handleClick = () => {
    if (!isLoggedIn) {
      toast.error("Please login to save stocks");
      return;
    } else {
      // TODO: Save the stock to the database
      if (stockToBeSaved.length === 0) {
        toast.error("Please choose a valid stock");
      } else {
        toast.success("Stock saved");
        console.log(stockToBeSaved);
        writeUserData(UID, stockToBeSaved);
      }
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
                    ${
                      darkMode
                        ? "fill-yellow-500 stroke-yellow-400"
                        : "fill-none stroke-neutral-400"
                    }`}
      />
    </button>
  );
};

export default SaveButton;
