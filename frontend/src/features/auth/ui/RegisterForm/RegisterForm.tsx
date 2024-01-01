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

export const RegisterForm = () => {
  return (
    <HStack justify='center'>
      <VStack className={cls.auth} gap={12}>
        <VStack max gap={40} className={cls.authTop}>
          <VStack align='center'>
            <img src={Logo} alt='' />
            <Text color='gray' align='center'>
              Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.
            </Text>
          </VStack>
          <Form>
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
              <Input value='' placeholder='Электронный адрес' />
              <Input value='' placeholder='Телефон' />
              <Input value='' placeholder='Имя пользователя' />
              <Input type='password' value='' placeholder='Пароль' />
              <Input type='password' value='' placeholder='Повторите пароль' />
              <Text color='gray' size={10}>
                Регистрируясь вы принимаете условия. Прочтите политику
                конфиденциальности, чтобы узнать, как мы получаем, используем и
                передаем ваши данные. Также посмотрите Политику в отношении
                фалов cookie, чтобы узнать, как мы используем файлы cookie и
                подобные технологии.
              </Text>
              <Button max>Зарегистрироваться</Button>
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
