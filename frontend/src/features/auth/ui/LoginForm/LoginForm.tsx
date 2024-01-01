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

export const LoginForm = () => {
  return (
    <HStack justify='center'>
      <VStack className={cls.auth} gap={12}>
        <VStack max gap={40} className={cls.authTop}>
          <img src={Logo} alt='' />
          <Form>
            <VStack gap={16}>
              <Input
                value=''
                placeholder='Телефон, имя пользователя или эл. адрес'
              />
              <Input type='password' value='' placeholder='Пароль' />
              <Button max>Войти</Button>
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
