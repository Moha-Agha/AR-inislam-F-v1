import React, { Fragment, useState, useEffect } from "react";

import HeaderOfSection from "../01_uiElements/HeaderOfSection"
import Articles from "../01_uiElements/Articles"
import Pagination from "../01_uiElements/Pagination"
import Preloader from "../01_uiElements/Preloader"

const Section = () => {

  return (

    <Fragment>

      <HeaderOfSection />

      <Articles start="3" end="9" />


      <Pagination />


    </Fragment>
  )

};

export default Section;
