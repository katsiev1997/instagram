import cls from './LoginForm.module.scss';
import {
  AppLink,
  Button,
  Form,
  HStack,
  Icon,
  Input,
  Text,
  VStack,
} from '@/shared/ui';
import Logo from '@/shared/assets/Logo.png';
import { useContext } from 'react';
import { ThemeContext } from '@/app/provider';
import {
  type LoginFormValues,
  useLoginForm,
} from '../../model/schema/useLoginForm';
import { Theme } from '@/shared/consts/theme';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { loginByEmail } from '../../model/service/loginByEmail';
import { getAuthError } from '../../model/selectors/getAuthError';
import { useSelector } from 'react-redux';
import { getAuthLoading } from '../../model/selectors/getAuthLoading';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const authError = useSelector(getAuthError);
  const authLoading = useSelector(getAuthLoading);
  const { register, watch, handleSubmit, errors, isValid, LoginFormNames } =
    useLoginForm();

  const onSubmit = async (data: LoginFormValues) => {
    const res = await dispatch(loginByEmail(data));
    if (res.meta.requestStatus === 'fulfilled') {
      navigate('/');
    }
  };
  return (
    <HStack justify='center'>
      <VStack className={cls.auth} gap={12}>
        <VStack max gap={40} className={cls.authTop}>
          <img className={theme === Theme.DARK && cls.dark} src={Logo} alt='' />
          <Form onSubmit={handleSubmit(onSubmit)}>
            <VStack gap={16}>
              <Input
                {...register(LoginFormNames.EMAIL)}
                value={watch(LoginFormNames.EMAIL)}
                error={errors?.email?.message}
                placeholder='Телефон, имя пользователя или эл. адрес'
              />
              <Input
                {...register(LoginFormNames.PASSWORD)}
                type='password'
                value={watch(LoginFormNames.PASSWORD)}
                error={errors?.password?.message}
                placeholder='Пароль'
              />
              {authError && <Text color='error'>{authError}</Text>}
              <Button
                type='submit'
                disabled={!isValid && authLoading}
                loading={authLoading}
                max
              >
                Войти
              </Button>
              <Text>или</Text>
              <VStack max align='center' gap={22}>
                <VStack max gap={12}>
                  {' '}
                  <Button
                    max
                    variant='outline'
                    addOnLeft={<Icon type='google' />}
                  >
                    Войти через Google
                  </Button>
                  <Button
                    max
                    variant='outline'
                    addOnLeft={<Icon type='Facebook' />}
                  >
                    Войти через Facebook
                  </Button>
                </VStack>
                <AppLink to='/forgot'>
                  <Text color='blue'>Забыли пароль?</Text>
                </AppLink>
              </VStack>
            </VStack>
          </Form>
        </VStack>
        <HStack max className={cls.authBottom} justify='center' gap={8}>
          <Text tag='span'>У вас еще нет аккаунта?</Text>
          <AppLink to='/register'>
            <Text color='blue'>Зарегистрироваться</Text>
          </AppLink>
        </HStack>
      </VStack>
    </HStack>
  );
};
