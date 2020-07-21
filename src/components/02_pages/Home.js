import React, { useState, useEffect, Fragment } from "react";
import axios from 'axios';
import { useTranslation } from 'react-i18next';

import ArticleMotivator from "../01_uiElements/ArticleMotivator"
import PremiumButton from "../01_uiElements/button/PremiumButton"
import SecondaryButton from "../01_uiElements/button/SecondaryButton"
import SectionsTag from "../01_uiElements/SectionsTag"
import Preloader from "../01_uiElements/Preloader"


const Home = () => {
  const { t } = useTranslation();

  const [mostViewedArticles, setMostViewedArticles] = useState([]);
  const [newArticles, setNewArticle] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const data = res.data;

        setMostViewedArticles({ data });
      })
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const data = res.data;

        setNewArticle({ data });
        setLoading(false)
      })
  }, [])



  if (loading) {
    return <Preloader />;
  } else {
    return (
      <Fragment>

        <div className="header-page">
          <div>
            <PremiumButton />
            <SecondaryButton />
          </div>
          <p>{t("home.websiteInfo")}</p>
        </div>

        <div className="sections-tags">
          <div>
            <SectionsTag title='جميع الاقسام' />
          </div>
          <div>
            <SectionsTag title='قسم الاساسيات' />
            <SectionsTag title='قسم العبادات' />
            <SectionsTag title='قسم الفيبيات' />
            <SectionsTag title='قسم الخرافات' />
          </div>
        </div>

        <div className="article-motivators">
          {
            mostViewedArticles.data.slice(0, 3).map((mostViewedArticle) => {
              return (
                <ArticleMotivator key={mostViewedArticle.id} image={'https://source.unsplash.com/collection/' + mostViewedArticle.id} tags={mostViewedArticle.id}
                  title={mostViewedArticle.id} share={mostViewedArticle.id}
                  likes={mostViewedArticle.id} views={mostViewedArticle.id}
                  youtube={mostViewedArticle.id} spotify={mostViewedArticle.id} />
              )
            })
          }
        </div>

        <h3 className="home-title_h3">
          المقالات المضافة حديثاً في المدونة
        </h3>

        <div className="article-motivators">
          {
            mostViewedArticles.data.slice(3, 9).map((mostViewedArticle) => {
              return (
                <ArticleMotivator key={mostViewedArticle.id} image={'https://source.unsplash.com/collection/' + mostViewedArticle.id} tags={mostViewedArticle.id}
                  title={mostViewedArticle.id} share={mostViewedArticle.id}
                  likes={mostViewedArticle.id} views={mostViewedArticle.id}
                  youtube={mostViewedArticle.id} spotify={mostViewedArticle.id} />
              )
            })
          }
        </div>


        <div className="text-buttons-group">
          <div>
            <SecondaryButton />
            <SecondaryButton />
            <SecondaryButton />
          </div>
          <p>{t("home.websiteInfo")}</p>
        </div>



      </Fragment>
    );
  }

};

export default Home;
