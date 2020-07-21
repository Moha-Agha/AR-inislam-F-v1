import React, { Fragment } from "react";
import SecondaryButton from "./button/SecondaryButton"

const WhatsappPromotional = () => {
  return (
    <div className="whatsapp-promotional">
      <h2>
        الانضمام لمجموعة الوتساب لهذا القسم فقط
      </h2>
      <p>
        بحال كان اهتمامك منحصر في هذا القسم بالتحديد, فيمكنك الان الانضمام الى المجموعة الخاصة للوتساب لتبقى على اطلاع بكل جديد بهذا القسم.
      </p>
      <SecondaryButton />
      <a href="" className="sub-link">
        كيف تخرج من الكروب المشترك فيه ؟
      </a>
    </div>
  );
};

export default WhatsappPromotional;
