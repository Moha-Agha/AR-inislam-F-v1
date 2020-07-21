import React from "react";
import { useTranslation } from 'react-i18next';
import SecondaryButton from '../button/SecondaryButton';

const ArticleOther = () => {
  const { t } = useTranslation();
  return (
    <div className="article_other">

      <a href="#" className="article_like">
        <span>لا تنسى الإعجاب والمشاركة</span>
        <i className="aicon-heartLike"></i>
       200K
    </a>
      <SecondaryButton title="المراجع المستخدمة في المقال" />

    </div>
  );
};

export default ArticleOther;
