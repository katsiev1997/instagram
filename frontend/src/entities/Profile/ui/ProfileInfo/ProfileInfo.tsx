import { ThemeContext } from '@/app/provider';
import { getAuthData } from '@/entities/User';
import { type User } from '@/entities/User/model/types/user';
import { Theme } from '@/shared/consts/theme';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { Avatar, DropDown, HStack, Text, VStack } from '@/shared/ui';
import { EllipsisOutlined } from '@ant-design/icons';
import { Button, Spin, Modal } from 'antd';
import { useContext, useEffect, type FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { userProfile } from '../../model/consts/userProfile';
import { getProfileUser } from '../../model/selectors/getProfileUser';
import { profileActions } from '../../model/slice/profileSlice';
import cls from './ProfileInfo.module.scss';
import { getProfileUserLoading } from '../../model/selectors/getProfileUserLoading';
import { EditProfile } from '../EditProfile/EditProfile';

interface ProfileInfoProps {
  id: string;
  users: User[];
}

export const ProfileInfo: FC<ProfileInfoProps> = ({ id, users }) => {
  const { theme } = useContext(ThemeContext);

  const authData = useSelector(getAuthData);
  const profileLoading = useSelector(getProfileUserLoading);
  const user = useSelector(getProfileUser);

  const [open, setOpen] = useState<boolean>(false);

  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const dispatch = useAppDispatch();
  const dropDownDotsItems = userProfile(authData._id === id);

  useEffect(() => {
    if (authData?._id === id) {
      dispatch(profileActions.setProfileUser(authData));
    } else {
      const newUser = users.find((item) => item._id === id);
      if (newUser) dispatch(profileActions.setProfileUser(newUser));
    }
  }, [id, authData, users]);

  if (profileLoading) {
    return (
      <HStack justify='center'>
        <Spin size='large' />
      </HStack>
    );
  }
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
                {authData._id === id ? (
                  <Button onClick={onOpen} type='default' color='blue'>
                    Изменить
                  </Button>
                ) : (
                  <Button type='primary' color='blue'>
                    Подписаться
                  </Button>
                )}
                {/* <Modal isOpen={open} onClose={onClose}>
                  <h3>Edit profile</h3>
                </Modal> */}
                <Modal
                  title='EditProfile'
                  open={open}
                  centered
                  onCancel={onClose}
                >
                  <EditProfile auth={authData} onClose={onClose} />
                </Modal>
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
