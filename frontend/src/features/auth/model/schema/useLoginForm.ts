import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export enum LoginFormNames {
  EMAIL = 'email',
  PASSWORD = 'password',
}

export interface LoginFormValues {
  email?: string;
  password?: string;
}

export const useLoginForm = () => {
  const message = 'Поле не должно быть пустым';
  const schema = yup.object().shape({
    email: yup.string().email('Почта не валидна').required(message),
    password: yup.string().required(message).min(6, 'Минимум 6 символов'),
  });
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormValues>({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  return { register, watch, handleSubmit, LoginFormNames, errors, isValid };
};
