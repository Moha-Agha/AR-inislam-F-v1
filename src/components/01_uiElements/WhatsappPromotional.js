import React, { Fragment } from "react";
import SecondaryButton from "./button/SecondaryButton"

const WhatsappPromotional = ({ classes = "" }) => {

  let addClasses = "whatsapp-promotional " + classes

  return (
    <div className={addClasses}>
      <h2>
        الانضمام لمجموعة الوتساب لهذا القسم فقط
      </h2>
      <p>
        بحال كان اهتمامك منحصر في هذا القسم بالتحديد, فيمكنك الان الانضمام الى المجموعة الخاصة للوتساب لتبقى على اطلاع بكل جديد بهذا القسم.
      </p>
      <SecondaryButton title="الانضمام لمجموعة الوتساب" />
      <a href="" className="sub-link">
        كيف تخرج من الكروب المشترك فيه ؟
      </a>
    </div>
  );
};

export default WhatsappPromotional;
