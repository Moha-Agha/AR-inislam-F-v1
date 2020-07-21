import React, { useState, useEffect } from "react";
import axios from 'axios';

import Preloader from "../01_uiElements/Preloader"

import Breadcrumb from "../01_uiElements/article/Breadcrumb"
import ArticleTitle from "../01_uiElements/article/ArticleTitle"
import ArticleInfo from "../01_uiElements/article/ArticleInfo"
import ArticleImage from "../01_uiElements/article/ArticleImage"
import ArticleBody from "../01_uiElements/article/ArticleBody"
import ArticleOther from "../01_uiElements/article/ArticleOther"
import EditSuggestion from "../01_uiElements/article/EditSuggestion"
import ArticleMore from "../01_uiElements/article/ArticleMore"

import Sharing from "../01_uiElements/article/Sharing"


const Article = () => {

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
      <div className="article">

        <Sharing />
        <Breadcrumb />
        <ArticleTitle />
        <ArticleInfo />
        <ArticleImage />
        <ArticleBody />
        <ArticleOther />
        <EditSuggestion />
        <ArticleMore />

      </div>
    )
  }
};

export default Article;
