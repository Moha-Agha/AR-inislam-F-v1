import React from "react";
import { useTranslation } from 'react-i18next';

const Sharing = () => {
  const { t } = useTranslation();
  return (
    <div className="sharing">
      <a href="whatsapp"><i className="aicon-whatsapp"></i></a>
      <a href="facebook"><i className="aicon-facebook"></i></a>
      <a href="twitter"><i className="aicon-twitter"></i></a>
      <a href="link"><i className="aicon-link"></i></a>
      <a href="message"><i className="aicon-message"></i></a>
      <a href="print"><i className="aicon-print"></i></a>
    </div>
  );
};

export default Sharing;
