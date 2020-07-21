import React from "react";

const Button = ({ placeholder, className, type }) => {
  let classesName = 'button ' + className;
  return (
    <div className={classesName} >
      <button type={type}>{placeholder}</button>
    </div>
  );
};

export default Button;
