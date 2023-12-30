import React from 'react';
import cls from './Navbar.module.scss';
import Logo from '@/shared/assets/Logo.png';
import Home from '@/shared/assets/svg/Home.svg';
import { NavSearch, NavMenu } from '../';

export const Navbar = () => {
  return (
    <div className={cls.navbar}>
      <div className='container'>
        <div className={cls.wrap}>
          <img src={Logo} alt='Logo' />
          <Home />
          <NavSearch />

          <NavMenu />
        </div>
      </div>
    </div>
  );
};
