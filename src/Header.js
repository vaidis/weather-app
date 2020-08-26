import React from "react";
import Logo from './assets/cloud.svg'

function Header() {

    return (
      <div className="header">
        <img className="logo" src={Logo} />
        <h1 className="title">Cloudly</h1>
      </div>
    );
  }
  
  export default Header;
  