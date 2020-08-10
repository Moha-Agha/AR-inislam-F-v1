import React from "react";

import i18next from 'i18next';

const Navbarlanguage = () => {

  const handleClick = (lang) => {
    i18next.changeLanguage(lang)
  }
  return (
    <div className="navbar_container_language">
      <div className="navbar_language">
        <select id="dropdown-content">
          <option value="arabic" onClick={() => handleClick('ar')}>عربي</option>
          <option value="English" onClick={() => handleClick('en')}>English</option>
          <option value="deutsch" onClick={() => handleClick('de')}>deutsch</option>
        </select>
      </div>
    </div>
  )
};

export default Navbarlanguage;

