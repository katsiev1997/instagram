import React from 'react';
import cls from './Icon.module.scss';
import { IconName, IconType } from './IconName';
import { classNames } from '@/shared/lib/classNames';

interface IconProps {
  type: IconType;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ type, className }) => {
  return <div className={classNames(cls.icon,{},[className])}>{IconName[type]}</div>;
};
