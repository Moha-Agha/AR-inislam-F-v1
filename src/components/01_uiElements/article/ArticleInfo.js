import React from "react";
import { useTranslation } from 'react-i18next';

const ArticleInfo = () => {
  const { t } = useTranslation();
  return (
    <div className="article_info">

      <div className="article_author">
        <img src="https://images.unsplash.com/photo-1571512599285-9ac4fdf3dba9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80 334w" alt="article author" width="55" height="55" />
        <div>
          <div className="article_author_name">
            محمد أغا
      </div>
          <div className="article_author_publish-date">
            2020-10-25
      </div>
        </div>
      </div>

      <div >
        <div className="article_reading-duration">
          <i className="aicon-clock"></i>
          <span>7</span>
          <span>دقائق قراءة</span>

        </div>

        <div className="article_send-me-to">
          <a href="youtube">
            <i className="aicon-youtube"></i>
            <span>
              شاهد الموضوع فيديو
      </span>
          </a>
        </div>

        <div className="article_send-me-to">
          <a href="spotify">
            <i className="aicon-spotify"></i>
            <span>
              أستمع للموضوع صوت
      </span>
          </a>
        </div>


      </div>
    </div>
  );
};

export default ArticleInfo;
