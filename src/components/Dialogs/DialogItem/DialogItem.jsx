import React from 'react';
import s from './../Dialogs.module.scss';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;
  
  return (
    <div className={s.dialogItem}> 
        <NavLink to={path} className={s.dialog} activeClassName={s.active}>
          <img src="https://pp.userapi.com/c854428/v854428447/7f6a5/Jk3lwrgpMkw.jpg?ava=1" alt="Avatar" />
          <div className={s.dialogDiscription}>
            <h3>{props.name}</h3>
            <p>Hello World!</p>
          </div>
        </NavLink>
    </div>
  );
}

export default DialogItem;