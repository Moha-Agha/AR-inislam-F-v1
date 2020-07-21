import React from "react";

const SecondaryButton = ({ title = "الانضمام لمجموعة الوتساب" }) => {
  return (
    <a href="#" className="secondary-button">
      {title}
    </a>
  );
};

export default SecondaryButton;
