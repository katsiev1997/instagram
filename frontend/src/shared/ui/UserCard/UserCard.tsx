/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { Avatar } from 'antd';
import { memo, type FC } from 'react';
import cls from './UserCard.module.scss';
import { AppLink, HStack, Text, VStack } from '..';

interface UserCardProps {
  className?: string;
  id: string;
  src?: string;
  alt?: string;
  title: string;
  content: string;
  onClick?: () => void;
}
export const UserCard: FC<UserCardProps> = memo((props) => {
  const { src, id, alt, className = '', content, title, onClick } = props;

  return (
    <HStack
      gap={16}
      className={`${cls.userCard} ${className}`}
      onClick={onClick}
    >
      <Avatar src={src && src} alt={alt} />
      <VStack align='start'>
        <Text weight={700} tag='span' className={cls.title}>
          <AppLink to={`/profile/${id}`}>{title}</AppLink>
        </Text>
        <Text>{content}</Text>
      </VStack>
    </HStack>
  );
});
