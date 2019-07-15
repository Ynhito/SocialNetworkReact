import React from 'react';
import s from './../FriendsList.module.scss';
import { NavLink } from 'react-router-dom';

const Friend = (props) => {

  let path = '/friends/' + props.id;

  return (
    <li className={s.frindsList_item}>
      <NavLink to={path}>
        <img src="https://pp.userapi.com/c854428/v854428447/7f6a5/Jk3lwrgpMkw.jpg?ava=1" alt="Ava" />
        <p className="name">{props.name}</p>
      </NavLink>
    </li>
  );
}

export default Friend;