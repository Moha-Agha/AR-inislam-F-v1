import React from "react";
import { useTranslation } from 'react-i18next';

const Checkbox = ({ name, className, type }) => {
  const { t } = useTranslation();

  const register = (name) => {
    return (
      <i>{t('Register.agreedOn')} <a href='#'>{t('Register.TermsOfUse')}</a> {t('Register.andOn')} <a href='#'>{t('Register.PrivacyPolicy')}</a></i>
    );
  }

  let classesName = 'checkbox ' + className;
  return (
    <label className={classesName}>
      <input type="checkbox" name={name} value="ok" />
      <span className="checkmark"></span>
      {type == 'register' ? register(name) : null}
    </label>
  );
};



export default Checkbox;
