import React from "react";

const SecondaryButton = ({ title = " ", icon = "" }) => {

  let isIcon
  let secondaryButtonClass

  if (icon == "") {
    isIcon = ""
    secondaryButtonClass = "secondary-button"
  } else {
    isIcon = <i className={icon}></i>
    secondaryButtonClass = "secondary-button-icon"
  }

  return (
    <a href="#" className={secondaryButtonClass}>
      {title} {isIcon}
    </a>
  );
};

export default SecondaryButton;
