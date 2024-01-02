import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export enum RegisterFormNames {
  EMAIL = 'email',
  USERNAME = 'username',
  PHONE = 'phone',
  PASSWORD = 'password',
  CF_PASSWORD = 'cf_password',
}

export interface RegisterFormValues {
  email?: string;
  username?: string;
  phone?: string;
  password?: string;
  cf_password?: string;
}

export const useRegisterForm = () => {
  const message = 'Поле необходимо заполнить';
  const schema = yup.object().shape({
    email: yup.string().email('Почта не валидна').required(message),
    username: yup.string().required(message).min(3, 'Минимум 3 символов'),
    phone: yup.string().required(message).min(3, 'Минимум 3 символов'),
    password: yup.string().required(message).min(6, 'Минимум 6 символов'),
    cf_password: yup
      .string()
      .required(message)
      .min(6, 'Минимум 6 символов')
      .oneOf([yup.ref('password')], 'Пароли не совпадают'),
  });
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<RegisterFormValues>({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      username: '',
      phone: '',
      password: '',
      cf_password: '',
    },
  });
  return { register, watch, handleSubmit, RegisterFormNames, errors, isValid };
};
