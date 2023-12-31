import Logo from '@/shared/assets/Logo.png';
import { NavMenu, NavSearch } from '../';
import cls from './Navbar.module.scss';

import { ThemeContext } from '@/app/provider';
import { Theme } from '@/shared/consts/theme';
import { useContext } from 'react';

export const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={cls.navbar}>
      <div className='container'>
        <div className={cls.wrap}>
          <img
            className={theme === Theme.DARK && cls.dark}
            src={Logo}
            alt='Logo'
          />
          <NavSearch />
          <NavMenu />
        </div>
      </div>
    </div>
  );
};
