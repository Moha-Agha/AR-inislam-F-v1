import React, { Fragment, useState, useEffect } from "react";

import HeaderOfSection from "../01_uiElements/HeaderOfSection"
import Articles from "../01_uiElements/Articles"
import WhatsappPromotional from "../01_uiElements/WhatsappPromotional"
import Pagination from "../01_uiElements/Pagination"
import Preloader from "../01_uiElements/Preloader"

const Section = () => {

  return (

    <Fragment>

      <HeaderOfSection />

      <Articles start="3" end="9" />


      <Pagination />

      <WhatsappPromotional classes=" hide-tablet hide-desktop" />

    </Fragment>
  )

};

export default Section;
