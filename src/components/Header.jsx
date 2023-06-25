import React from 'react';
import Search from "./Search";
import Themeicon from './Themeicon';
import Login from './LoginButton';
import SaveButton from './SaveButton';

const Header = ({ name, stockCallback, quoteCallback, isLoggedIn }) => {
  return <>
    <div className="x1:px-32">
      <h1 className="text-5xl">{name}</h1>
      <Search stockCallback={stockCallback} quoteCallback={quoteCallback}/>  
    </div>
    <SaveButton isLoggedIn={isLoggedIn}/>
    <Themeicon/>
    <Login/>
  </>;
};

export default Header;