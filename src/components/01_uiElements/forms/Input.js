import React from "react";

const Input = ({ name, placeholder, className, type }) => {
  let classesName = 'input ' + className;
  return (
    <div className={classesName} >
      <label htmlFor={name}>{placeholder}</label>
      <input type={type} name={name} />
    </div>
  );
};

export default Input;
