import React, { Fragment } from "react";

import { useTranslation } from 'react-i18next';

import Articles from "../01_uiElements/Articles"
import PremiumButton from "../01_uiElements/button/PremiumButton"
import SecondaryButton from "../01_uiElements/button/SecondaryButton"
import SectionsTags from "../01_uiElements/SectionsTags"


const Home = () => {
  const { t } = useTranslation();


  return (
    <Fragment>

      <div className="header-page">
        <div>
          <PremiumButton />
          <SecondaryButton />
        </div>
        <p>{t("home.websiteInfo")}</p>
      </div>

      <SectionsTags />

      <Articles start="0" end="3" />

      <h3 className="home-title_h3">
        المقالات المضافة حديثاً في المدونة
        </h3>

      <Articles small="true" start="2" end="12" />


      <div className="text-buttons-group">
        <div>
          <SecondaryButton title="الإنضمام الى فريق الكتاب" />
          <SecondaryButton title="دعم تطوير الموقع" />
          <SecondaryButton title="الإنضمام الى فريق المترحمين" />
        </div>
        <p>{t("home.websiteInfo")}</p>

      </div>



    </Fragment>
  );


};

export default Home;
