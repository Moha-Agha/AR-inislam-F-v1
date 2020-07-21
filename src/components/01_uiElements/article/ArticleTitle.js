import React from "react";
import { useTranslation } from 'react-i18next';

const ArticleTitle = () => {
  const { t } = useTranslation();
  return (
    <div className="article_title">
      <h1>
        كيف تفهم رسالة الله بدون الحاجة الى مصادر وتبعد المدخلات السياسية على المحتوى؟
          </h1>
      <h2>
        تم البحث اعتماداً على النصوص الموجودة في كتاب الله حصراً مع احترام والتقدير لجميع أراء الأخوة الافاضل بمختلف توجهاتهم وأساليب بحثهم
          </h2>
    </div>
  );
};

export default ArticleTitle;
