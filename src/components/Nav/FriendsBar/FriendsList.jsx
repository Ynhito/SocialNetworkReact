import React from 'react';
import s from './FriendsList.module.scss';
import { NavLink } from 'react-router-dom';
import Friend from './FriendItem/Friend';

const FriendsList = (props) => {

  let friendElement = props.friendsData
    .map(f => <Friend name={f.name} id={f.id} />);

  return (
    <div className={s.friends}>
      <h2>Friends</h2>
      <ul className={s.frindsList}>
        {friendElement}
      </ul>
    </div>
  );
}

export default FriendsList;