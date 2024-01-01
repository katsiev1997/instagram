import { LoginForm } from '@/features/auth/ui/LoginForm';
import { useTranslation } from 'react-i18next';

const LoginPage = () => {
  const { t } = useTranslation('loginPage');
  return (
    <div>
      {t('LoginPage')}
      <LoginForm />
    </div>
  );
};

export default LoginPage;
