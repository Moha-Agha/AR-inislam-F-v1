import React, { Fragment } from "react";
import Newsletter from "./Newsletter"
import FooterLinks from "./FooterLinks"
import SiteInfo from "./SiteInfo"

const Footer = () => {


  let aboutList = [
    { title: 'كلمة الإدارة', link: '1' },
    { title: 'شروط الإستخدام', link: '2' },
    { title: 'سياسة الخصوصية', link: '3' }
  ]
  let joinUsList = [
    { title: 'انشر مقالك هنا', link: '1' },
    { title: 'ترجم مقال للغتك', link: '2' },
    { title: 'الوظائف المتاحة', link: '3' }
  ]
  let usefulLinksList = [
    { title: 'تواصل معنا', link: '1' },
    { title: 'خريطة الموقع', link: '2' },
    { title: 'الأسئلة المتكررة', link: '3' }
  ]


  return (
    <footer>
      <div className='footer' >
        <SiteInfo />
        <div className="footer_footer-links">
          <FooterLinks listTitle="في الإسلام" listItems={aboutList} />
          <FooterLinks listTitle="انضم لمجتمعنا" listItems={joinUsList} />
          <FooterLinks listTitle="روابط مفيدة" listItems={usefulLinksList} extraClass="hide-mobile" />
        </div>
        <div className="footer_footer-links_line"></div>
        <FooterLinks listItems={usefulLinksList} extraClass="mobile-extra-links" />

        <Newsletter />

        <div className="footer-extra_in">
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
