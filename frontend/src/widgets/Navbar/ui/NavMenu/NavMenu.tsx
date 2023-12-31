import user from '@/shared/assets/user.png';
import { useContext } from 'react';
import cls from './NavMenu.module.scss';

import { ThemeContext } from '@/app/provider';
import { SwitchButton } from '@/features';
import { Theme } from '@/shared/consts/theme';
import { classNames } from '@/shared/lib/classNames';
import { Avatar, Icon } from '@/shared/ui';
import { INavMenuItem } from '../../model/consts/navMenu';

export const NavMenu = () => {
  const { theme } = useContext(ThemeContext);

  const navMenuItems: INavMenuItem[] = [
    { href: '/', type: 'Home' },
    { href: '/messenger', type: 'Messenger' },
    { type: 'NewPosts' },
    { href: '/explore', type: 'FindPeople' },
    { type: 'Favorite' },
  ];
  return (
    <nav className={cls.nav}>
      <ul className={cls.list}>
        {navMenuItems.map((item,i) => (
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
              <a href={item.href} className={cls.link}>
                <Icon type={item.type} />
              </a>
            ) : (
              <Icon type={item.type} />
            )}
          </li>
        ))}
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
