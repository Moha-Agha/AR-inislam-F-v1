import React from "react";
import { useTranslation } from 'react-i18next';

const ArticleImage = () => {
  const { t } = useTranslation();
  return (
    <div className="article_image">
      <img src="https://source.unsplash.com/collection/10" />
      <span className="article_image_image-info">
        المصدر - صفحة كذا وكذا
          </span>
    </div>
  );
};

export default ArticleImage;
