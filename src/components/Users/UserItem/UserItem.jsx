import React from 'react';
import s from './../Users.module.scss';
import userPhoto from '../../../assets/images/768px-Circle-icons-profile.svg.png';
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../../api/usersAPI';

const UserItem = (props) => {

  let follow = () => {
    usersAPI.follow(props.id)
      .then(response => {
        if (response.resultCode == 0) {
          props.follow(props.id);
        }
      })
  }

  let unfollow = () => {
    usersAPI.unfollow(props.id)
      .then(response => {
        if (response.resultCode == 0) {
          props.unFollow(props.id);
        }
      })
  }
  return (

    <div className={s.userItem}>
      <div className={s.userAva}>
        <NavLink to={'/profile/' + props.id}>
          <img src={props.photos.small !== null ? props.photos.small : userPhoto} alt="ava" />
        </NavLink>
        {props.followed ?
          <button onClick={unfollow}>Unfollow</button>
          :
          <button onClick={follow}>Follow</button>}
      </div>

      <div className={s.userInfo}>
        <h3> {props.fullName} </h3>
        <p className={s.status}> {props.status} </p>
      </div>

    </div>

  );
}

export default UserItem;