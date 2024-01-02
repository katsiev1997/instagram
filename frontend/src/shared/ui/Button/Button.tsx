import { type ButtonHTMLAttributes, type FC, type ReactNode } from 'react';
import cls from './Button.module.scss';
import { type Mods, classNames } from '@/shared/lib/classNames';
import { Spinner } from '../Spinner/Spinner';

type ButtonVariant = 'default' | 'outline';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  addOnLeft?: JSX.Element;
  addOnRight?: JSX.Element;
  variant?: ButtonVariant;
  children?: ReactNode;
  max?: boolean;
}

export const Button: FC<ButtonProps> = ({
  className,
  disabled,
  loading,
  variant = 'default',
  children,
  addOnLeft,
  addOnRight,
  max = false,
}) => {
  const variantClasses: Record<ButtonVariant, string> = {
    default: cls.default,
    outline: cls.outline,
  };
  const classes = [variant && variantClasses[variant], className];
  const mods: Mods = {
    [cls.disabled]: disabled,
    [cls.max]: max,
  };
  return (
    <button disabled={disabled} className={classNames(cls.btn, mods, classes)}>
      {addOnLeft}
      {loading ? <Spinner size='s' variant='white' /> : children}
      {addOnRight}
    </button>
  );
};
