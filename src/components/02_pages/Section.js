import React, { Fragment, useState, useEffect } from "react";
import axios from 'axios';

import HeaderOfSection from "../01_uiElements/HeaderOfSection"
import ArticleMotivator from "../01_uiElements/ArticleMotivator"
import Pagination from "../01_uiElements/Pagination"
import Preloader from "../01_uiElements/Preloader"

const Section = () => {

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

        <HeaderOfSection />

        <div className="article-motivators">
          {
            mostViewedArticles.data.slice(0, 6).map((mostViewedArticle) => {
              return (
                <ArticleMotivator key={mostViewedArticle.id} image={'https://source.unsplash.com/collection/' + mostViewedArticle.id} tags={mostViewedArticle.id}
                  title={mostViewedArticle.id} share={mostViewedArticle.id}
                  likes={mostViewedArticle.id} views={mostViewedArticle.id}
                  youtube={mostViewedArticle.id} spotify={mostViewedArticle.id} />
              )
            })
          }
        </div>


        <Pagination />


      </Fragment>
    )
  }
};

export default Section;
