import React from 'react';
import cls from './NavMenu.module.scss';

import { Avatar, Icon } from '@/shared/ui';
import { INavMenuItem } from '../../model/consts/navMenu';

export const NavMenu = () => {
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
        {navMenuItems.map((item) => (
          <li className={cls.item}>
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
          <Avatar />
        </li>
      </ul>
    </nav>
  );
};
