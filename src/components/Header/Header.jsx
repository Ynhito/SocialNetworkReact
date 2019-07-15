import React from 'react';
import s from './Header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
  <header className={s.header}>
    <NavLink to="/profile">
      <img src='https://techcrunch.com/wp-content/uploads/2018/07/logo-2.png?w=300' />
    </NavLink>
  </header>
  );
};

export default Header;