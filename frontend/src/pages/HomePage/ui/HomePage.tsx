import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

const HomePage: FC = () => {
  const { t } = useTranslation();

  return <div>{t('Home page')}</div>;
};

export default HomePage;
