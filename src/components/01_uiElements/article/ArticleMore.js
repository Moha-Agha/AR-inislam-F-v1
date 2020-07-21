import React from "react";
import { useTranslation } from 'react-i18next';
import ArticleMotivator from '../ArticleMotivator';

const ArticleMore = () => {
  const { t } = useTranslation();
  return (
    <div className="article_more">
      <h2>المزيد من المقالات المميزة ؟</h2>
      <div className="article_more_blogs">
        <ArticleMotivator image="https://source.unsplash.com/collection/60" />
        <ArticleMotivator image="https://source.unsplash.com/collection/2" />
      </div>
    </div>
  );
};

export default ArticleMore;
