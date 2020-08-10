import React, { useRef } from "react";


import Logo from '../Logo'

import NavbarItems from './NavbarItems'
import Navbarlanguage from './Navbarlanguage'

const Navbar = () => {

  const flyoutBG = useRef(null)
  const navbar = useRef(null)

  return (

    <nav >
      <div className="navbar" ref={navbar}>
        <Logo logo='logo_nav' type='.png' />
        <NavbarItems flyoutBG={flyoutBG} navbar={navbar} />
        <Navbarlanguage />
      </div>
      <div className="flyout-bg" ref={flyoutBG}></div>
    </nav >


  );
};


export default Navbar;
