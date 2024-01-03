import user from '@/shared/assets/user.png';
import { useContext } from 'react';
import cls from './NavMenu.module.scss';

import { ThemeContext } from '@/app/provider';
import { getAuthData, logout } from '@/entities/User';
import { SwitchButton } from '@/features';
import { LangSwitch } from '@/features/LangSwitch/ui/LangSwitch';
import { Theme } from '@/shared/consts/theme';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { classNames } from '@/shared/lib/classNames';
import { AppLink, Avatar, DropDown, Icon, Text } from '@/shared/ui';
import { type MenuProps } from 'antd';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { type INavMenuItem } from '../../model/consts/navMenu';

export const NavMenu = () => {
  const dispatch = useAppDispatch();
  const { theme } = useContext(ThemeContext);

  const authData = useSelector(getAuthData);

  const navMenuItems: INavMenuItem[] = [
    { href: '/profile', type: 'Home' },
    { href: '/messenger', type: 'Messenger' },
    { type: 'NewPosts' },
    { href: '/explore', type: 'FindPeople' },
    { type: 'Favorite' },
  ];
  const dropDownItems: MenuProps['items'] = [
    {
      label: <Text color='blue'>{authData.username}</Text>,
      key: '0',
    },
    {
      label: <AppLink to={`/profile/${authData._id}`}>Профиль</AppLink>,
      key: '1',
    },
    {
      label: 'Сменить тему',
      key: '2',
    },
    {
      label: 'Настройки',
      key: '3',
    },
    {
      label: 'Выйти',
      onClick: async () => await dispatch(logout()),
      key: '4',
    },
  ];
  return (
    <nav className={cls.nav}>
      <ul className={cls.list}>
        {navMenuItems.map((item, i) => (
          <li
            key={i}
            className={classNames(
              cls.item,
              {
                [cls.dark]: theme === Theme.DARK,
              },
              []
            )}
          >
            {item.href
? (
              <Link to={item.href}>
                <Icon type={item.type} />
              </Link>
            )
: (
              <Icon type={item.type} />
            )}
          </li>
        ))}
        <li>
          <LangSwitch />
        </li>
        <li>
          <SwitchButton />
        </li>
        <li>
          <DropDown items={dropDownItems} placement='bottomLeft'>
            <Avatar src={user} />
          </DropDown>
        </li>
      </ul>
    </nav>
  );
};
