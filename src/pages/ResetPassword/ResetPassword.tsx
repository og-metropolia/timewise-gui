import React from 'react';
import { useTranslation } from 'react-i18next'; // Tuodaan useTranslation
import ROUTES from '@/constants/routes';
import styles from './ResetPassword.module.css';
import Logo from '@/components/Logo';

const ResetPassword: React.FC = () => {
  const { t } = useTranslation(); // Käytetään useTranslation hookia

  return (
    <div className={styles.basePageSecondary}>
      <Logo />
      <h1 className={styles.baseHeader}>{t('resetPassword.title')}</h1>
      <p>{t('resetPassword.description')}</p>
      <p>
        {t('resetPassword.helpText')}{' '}
        <a href="tel:+358 40 456 7890">{t('resetPassword.phoneNumber')}</a>{' '}
        {t('resetPassword.or')}{' '}
        <a href="mailto:support@clockwise.com">{t('resetPassword.email')}</a>{' '}
        {t('resetPassword.forAssistance')}.
      </p>
      <div>
        <p>
          {t('resetPassword.backTo')}{' '}
          <a href={ROUTES.login} className={styles.link}>
            {t('resetPassword.loginLink')}
          </a>
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;
