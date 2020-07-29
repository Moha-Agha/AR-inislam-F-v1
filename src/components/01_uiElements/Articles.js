import React, { useState, useEffect, Fragment } from "react";
import axios from 'axios';

import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import '../../i18n';

import ArticleMotivator from "../01_uiElements/ArticleMotivator"
import Preloader from "../01_uiElements/Preloader"

const Articles = ({ start = 0, end = 3, small = "false" }) => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const data = res.data;

        setArticles({ data });
        setLoading(false);
      })
  }, [])

  if (loading) {
    return <Preloader />;
  } else {
    return (
      <div className="article-motivators">
        <div className="article-motivators_container">
          {
            articles.data.slice(start, end).map((mostViewedArticle) => {
              return (
                <ArticleMotivator key={mostViewedArticle.id} image={'https://source.unsplash.com/collection/' + mostViewedArticle.id} tags={mostViewedArticle.id}
                  title={mostViewedArticle.id} share={mostViewedArticle.id}
                  likes={mostViewedArticle.id} views={mostViewedArticle.id}
                  youtube={mostViewedArticle.id} spotify={mostViewedArticle.id} small={small} />
              )
            })
          }
        </div>

      </div>
    );
  }

};

export default Articles;
