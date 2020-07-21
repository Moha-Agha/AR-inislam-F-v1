import React from "react";
import { useTranslation } from 'react-i18next';
import SecondaryButton from '../button/SecondaryButton';

const EditSuggestion = () => {
  const { t } = useTranslation();
  return (
    <div className="article_other_edit-suggestion">
      <SecondaryButton title="هل يوجد خطاء في المقال؟ يمكنك التعديد  الان" />
    </div>
  );
};

export default EditSuggestion;
