import React from 'react';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();

  return <div>{t('Home page')}</div>;
};

export default HomePage;
