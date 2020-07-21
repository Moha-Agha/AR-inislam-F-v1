import React from "react";
import { useTranslation } from 'react-i18next';

const Breadcrumb = () => {
  const { t } = useTranslation();
  return (
    <div className="breadcrumb">
      <a href="/" className="breadcrumb_first">الصفحة الرئيسية </a>
      /
      <a href="" className="breadcrumb_second">العلاقات الانسانية </a>
    </div>
  );
};

export default Breadcrumb;
