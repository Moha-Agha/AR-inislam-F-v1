import React, { Fragment } from "react";
import Newsletter from "./Newsletter"
import FooterLinks from "./FooterLinks"
import SiteInfo from "./SiteInfo"

const Footer = () => {
  return (
    <footer>
      <div className='footer' >
        <Newsletter />
        <div className="footer_footer-links">
          <FooterLinks />
          <FooterLinks />
          <FooterLinks />
        </div>
        <SiteInfo />
      </div>

      <div className="footer-extra">
        <div className="social-media">
          <li><a href="twitter"><i className="aicon-twitter"></i></a></li>
          <li><a href="facebook"><i className="aicon-facebook"></i></a></li>
          <li><a href="youtube"><i className="aicon-youtube"></i></a></li>
          <li><a href="spotify"><i className="aicon-spotify"></i></a></li>
        </div>
        <div className="copyright">
          <p> تم تصميم وبرمجة الموقع من <a href="">nicetwice.de</a></p>
          <p>كل الحقوق محفوظة لموقع في الإسلام -  يمنع نسخ  المحتوى © </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
