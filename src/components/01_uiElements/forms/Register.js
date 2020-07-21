import React from "react";
import { useTranslation } from 'react-i18next';

import Input from './Input';
import Checkbox from './Checkbox';
import Button from './Button';

const Register = () => {
  const { t } = useTranslation();
  return (
    <div className="register">
      <h2>{t('Register.title')}</h2>
      <Input name="userName" placeholder={t('Register.userName')} className="user-name" type="text" />
      <Input name="email" placeholder={t('Register.email')} className="email" type="email" />
      <Input name="password" placeholder={t('Register.password')} className="password" type="password" />
      <Checkbox name="accept" className="accept" type='register' />
      <Button placeholder={t('Register.CreateNewAccount')} className="button-creat" />
      <p>{t('Register.doYouHaveAccount')}</p>
      <Button placeholder={t('Login.login')} className="button-login" />
    </div>
  );
};

export default Register;
