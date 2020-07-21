import React from "react";

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="lds-ellipsis">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Preloader;
