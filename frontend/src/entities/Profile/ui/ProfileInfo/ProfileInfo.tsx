import { getAuthData } from '@/entities/User';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { Avatar, DropDown, HStack, Text, VStack } from '@/shared/ui';
import { EllipsisOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProfileUser } from '../../model/selectors/getProfileUser';
import { profileActions } from '../../model/slice/profileSlice';
import { userProfile } from '../../model/consts/userProfile';
import cls from './ProfileInfo.module.scss';
import { ThemeContext } from '@/app/provider';
import { Theme } from '@/shared/consts/theme';

export const ProfileInfo = () => {
  const { theme } = useContext(ThemeContext);
  const authData = useSelector(getAuthData);
  const user = useSelector(getProfileUser);
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const dropDownDotsItems = userProfile(authData._id === id);
  useEffect(() => {
    if (authData._id === id) {
      dispatch(profileActions.setProfileUser(authData));
    }
  }, [id, authData]);
  return (
    <div className={theme === Theme.DARK ? cls.dark : ''}>
      <HStack>
        {user && (
          <HStack>
            <Avatar
              size={150}
              src={user?.avatar}
              className={theme === Theme.DARK && cls.dark}
            />
            <VStack align='start' gap={32}>
              <HStack align='center' justify='between' gap={40}>
                <Text weight={700}>@{user?.username}</Text>
                {user._id === id ? (
                  <Button type='default' color='blue'>
                    Изменить
                  </Button>
                ) : (
                  <Button type='primary' color='blue'>
                    Подписаться
                  </Button>
                )}
                <DropDown items={dropDownDotsItems}>
                  <EllipsisOutlined style={{ fontSize: '25px' }} />
                </DropDown>
              </HStack>
              <HStack gap={40}>
                <HStack align='center' gap={16}>
                  <Text size={18} weight={500}>
                    1,258
                  </Text>
                  <Text>постов</Text>
                </HStack>
                <HStack align='center' gap={16}>
                  <Text size={18} weight={500}>
                    1,258
                  </Text>
                  <Text>подписчики</Text>
                </HStack>
                <HStack align='center' gap={16}>
                  <Text size={18} weight={500}>
                    1,258
                  </Text>
                  <Text>подписок</Text>
                </HStack>
              </HStack>

              <VStack>
                <HStack align='center' gap={12}>
                  <Text size={18} weight={400}>
                    Телефон: {user.phone}
                  </Text>
                  <Text size={18} weight={400}>
                    Адрес: {user.address}
                  </Text>
                  <Text size={18} weight={400}>
                    Сайт: {user.website}
                  </Text>
                  <Text size={18} weight={400}>
                    Описание: {user.story}
                  </Text>
                </HStack>
              </VStack>
            </VStack>
          </HStack>
        )}
      </HStack>
    </div>
  );
};
