import user from '@/shared/assets/user.png';
import { useContext } from 'react';
import cls from './NavMenu.module.scss';

import { ThemeContext } from '@/app/provider';
import { SwitchButton } from '@/features';
import { Theme } from '@/shared/consts/theme';
import { classNames } from '@/shared/lib/classNames';
import { Avatar, Icon } from '@/shared/ui';
import { Link } from 'react-router-dom';
import { type INavMenuItem } from '../../model/consts/navMenu';
import { LangSwitch } from '@/features/LangSwitch/ui/LangSwitch';

export const NavMenu = () => {
  const { theme } = useContext(ThemeContext);

  const navMenuItems: INavMenuItem[] = [
    { href: '/profile', type: 'Home' },
    { href: '/messenger', type: 'Messenger' },
    { type: 'NewPosts' },
    { href: '/explore', type: 'FindPeople' },
    { type: 'Favorite' },
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
            {item.href ? (
              <Link to={item.href} className={cls.link}>
                <Icon type={item.type} />
              </Link>
            ) : (
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
          <Avatar src={user} />
        </li>
      </ul>
    </nav>
  );
};
