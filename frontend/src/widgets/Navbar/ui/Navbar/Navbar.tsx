import Logo from '@/shared/assets/Logo.png';
import { NavMenu } from '../NavMenu/NavMenu';
import { NavSearch } from '../NavSearch/NavSearch';
import cls from './Navbar.module.scss';

import { ThemeContext } from '@/app/provider';
import { Theme } from '@/shared/consts/theme';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={cls.navbar}>
      <div className='container'>
        <div className={cls.wrap}>
          <Link to='/'>
            <img
              className={theme === Theme.DARK ? cls.dark : ''}
              src={Logo}
              alt='Logo'
            />
          </Link>

          <NavSearch />
          <NavMenu />
        </div>
      </div>
    </div>
  );
};
