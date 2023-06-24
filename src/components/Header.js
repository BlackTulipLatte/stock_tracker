import React from 'react';
import Search from "./Search";
import Themeicon from './Themeicon';
import Login from './Login';

const Header = ({ name, stockCallback, quoteCallback  }) => {
  return <>
    <div className="x1:px-32">
      <h1 className="text-5xl">{name}</h1>
      <Search stockCallback={stockCallback} quoteCallback={quoteCallback}/>
    </div>
    <div><Themeicon /></div>
    <div><Login /></div>

  </>;
};

export default Header;