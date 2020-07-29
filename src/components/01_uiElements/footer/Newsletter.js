import React from "react";

const Newsletter = () => {
  return (
    <div className="news-letter">
      <h2>القائمة البريدية</h2>
      <p>
        ليصلك كل جديد من الموقع
        <br />
        بادر بالإشتراك بالقائمة البريدية الأن
      </p>

      <div className="news-letter_form">
        <button type="button">إشتراك</button>
        <input type="text" id="fname" name="fname" placeholder="أدخل بريدك الإلكتروني هنا" />
      </div>

    </div>
  );
};

export default Newsletter;
