import cls from '../LoginForm/LoginForm.module.scss';
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
  type RegisterFormValues,
  useRegisterForm,
} from '../../model/schema/useRegisterForm';
import { Theme } from '@/shared/consts/theme';

export const RegisterForm = () => {
  const { theme } = useContext(ThemeContext);
  const { register, watch, errors, isValid, RegisterFormNames, handleSubmit } =
    useRegisterForm();
  const onSubmit = (data: RegisterFormValues) => {
    delete data.cf_password;
    console.log(data);
  };
  return (
    <HStack justify='center'>
      <VStack className={cls.auth} gap={12}>
        <VStack max gap={40} className={cls.authTop}>
          <VStack align='center'>
            <img
              className={theme === Theme.DARK && cls.dark}
              src={Logo}
              alt=''
            />
            <Text color='gray' align='center'>
              Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.
            </Text>
          </VStack>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <VStack gap={16}>
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
              </VStack>
              <Text>или</Text>
              <Input
                {...register(RegisterFormNames.EMAIL)}
                value={watch(RegisterFormNames.EMAIL)}
                error={errors?.email?.message}
                placeholder='Электронный адрес'
              />
              <Input
                {...register(RegisterFormNames.PHONE)}
                value={watch(RegisterFormNames.PHONE)}
                error={errors?.phone?.message}
                placeholder='Телефон'
              />
              <Input
                {...register(RegisterFormNames.USERNAME)}
                value={watch(RegisterFormNames.USERNAME)}
                error={errors?.username?.message}
                placeholder='Имя пользователя'
              />
              <Input
                {...register(RegisterFormNames.PASSWORD)}
                type='password'
                value={watch(RegisterFormNames.PASSWORD)}
                error={errors?.password?.message}
                placeholder='Пароль'
              />
              <Input
                {...register(RegisterFormNames.CF_PASSWORD)}
                type='password'
                value={watch(RegisterFormNames.CF_PASSWORD)}
                error={errors?.cf_password?.message}
                placeholder='Повторите пароль'
              />
              <Text color='gray' size={10}>
                Регистрируясь вы принимаете условия. Прочтите политику
                конфиденциальности, чтобы узнать, как мы получаем, используем и
                передаем ваши данные. Также посмотрите Политику в отношении
                фалов cookie, чтобы узнать, как мы используем файлы cookie и
                подобные технологии.
              </Text>
              <Button type='submit' disabled={!isValid} max>
                Зарегистрироваться
              </Button>
            </VStack>
          </Form>
        </VStack>
        <HStack max className={cls.authBottom} justify='center' gap={8}>
          <Text tag='span'>У вас уже есть аккаунт?</Text>
          <AppLink to='/login'>
            <Text color='blue'>Войти</Text>
          </AppLink>
        </HStack>
      </VStack>
    </HStack>
  );
};
