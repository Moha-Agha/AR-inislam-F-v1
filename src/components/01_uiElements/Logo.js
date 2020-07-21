import React from "react";

const Logo = ({ logo = 'logo_nav', type = '.png' }) => {
  let path = require('../../media/image/' + logo + type)
  return (
    <a href='/' className='logo'>
      <img src={path} alt="inislam.net logo" />
    </a >
  );
};

export default Logo;
