import React from 'react';
import s from './Header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
  <header className={s.header}>
    <NavLink to="/profile">
      <img src='https://techcrunch.com/wp-content/uploads/2018/07/logo-2.png?w=300' />
    </NavLink>
    {props.isFetching ? <div className={s.spinner}></div> : 
    <div className={s.loginBlock}>
      {props.isAuth 
        ? <div className={s.isAuthBlock}>
          <p>{props.login}</p>
          <button onClick={props.logout}>Log Out</button>
        </div>  
        :
      <NavLink to={'/login'}>Login</NavLink>}
    </div>}
  </header>
  );
};

export default Header;