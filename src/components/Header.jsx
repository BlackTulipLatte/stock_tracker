import React from "react";
import Search from "./Search";
import Themeicon from "./Themeicon";
import Login from "./LoginButton";
import SaveButton from "./SaveButton";
import SavedPageButton from "./SavedPageButton";
import { useState } from "react";

const Header = ({ name, stockCallback, quoteCallback, stockToBeSaved }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [UID, setUID] = useState("");

  // callback functions to update login information from children components
  const updateLogin = async (state) => {
    setLoggedIn(state);
  };
  const updateUID = async (uid) => {
    setUID(uid);
  };

  return (
    <>
      <div className="x1:px-32">
        <h1 className="text-5xl">{name}</h1>
        <Search
          stockCallback={stockCallback}
          quoteCallback={quoteCallback}
          UID={UID}
        />
      </div>
      <SavedPageButton UID={UID} />
      <SaveButton
        isLoggedIn={loggedIn}
        stockToBeSaved={stockToBeSaved}
        UID={UID}
      />
      <Themeicon />
      <Login loginFunc={updateLogin} UIDFunc={updateUID} />
    </>
  );
};

export default Header;
