import React from 'react';
import s from './Nav.module.scss';
import { NavLink } from 'react-router-dom';
import FriendsList from './FriendsBar/FriendsList';

const Nav = (props) => {
  return (
    <nav className={s.nav}>
      <ul>
        <li className={s.item}>
          <NavLink to="/profile" activeClassName={s.active}>
            Profile
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/dialogs" activeClassName={s.active}>
          Messages
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="#">
          News
        </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="#">
          Music
        </NavLink>
        </li>
      </ul>
      <FriendsList friendsData={props.state.friendsData} />
    </nav>
  );
};

export default Nav;