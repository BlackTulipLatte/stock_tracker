import React from 'react';
import Search from "./Search";
import Themeicon from './Themeicon';
import Login from './LoginButton';
import SaveButton from './SaveButton';
import {useState} from 'react'

const Header = ({ name, stockCallback, quoteCallback }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const updateLogin = async (state) => {
    setLoggedIn(state);
  };

  return <>
    <div className="x1:px-32">
      <h1 className="text-5xl">{name}</h1>
      <Search stockCallback={stockCallback} quoteCallback={quoteCallback}/>  
    </div>
    <SaveButton isLoggedIn={loggedIn}/>
    <Themeicon/>
    <Login loginFunc={updateLogin}/>
  </>;
};

export default Header;