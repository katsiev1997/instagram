import Logo from '@/shared/assets/Logo.png';
import Home from '@/shared/assets/svg/Home.svg';
import { NavMenu, NavSearch } from '../';
import cls from './Navbar.module.scss';

export const Navbar = () => {
  return (
    <div className={cls.navbar}>
      <div className='container'>
        <div className={cls.wrap}>
          <img src={Logo} alt='Logo' />
          <NavSearch />
          <NavMenu />
        </div>
      </div>
    </div>
  );
};
