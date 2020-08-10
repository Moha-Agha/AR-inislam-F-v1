import React from "react";
import HeaderInfo from "./HeaderInfo"
import WhatsappPromotional from "./WhatsappPromotional"

const HeaderOfSection = () => {
  return (
    <div className="header-of-section">

      <WhatsappPromotional classes="hide-mobile" />
      <HeaderInfo />

    </div>
  );
};

export default HeaderOfSection;
