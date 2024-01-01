import React from 'react';
// import cls from './LoginForm.module.scss';
import { AppLink, HStack, Text, VStack } from '@/shared/ui';

export const LoginForm = () => {
  return (
    <div>
      <VStack>
        <VStack>
          <HStack>
            <Text tag='span'>У вас еще нет аккаунта?</Text>
            <AppLink to='/register'>Зарегистрироваться</AppLink>
          </HStack>
        </VStack>
      </VStack>
    </div>
  );
};
