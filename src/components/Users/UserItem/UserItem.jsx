import React from 'react';
import s from './../Users.module.scss';
import userPhoto from '../../../assets/images/768px-Circle-icons-profile.svg.png';
import { NavLink } from 'react-router-dom';

const UserItem = ({
  follow,
  unFollow,
  id,
  photos,
  followingInProgress,
  fullName,
  followed,
  status
}) => {

  let onFollow = () => {
    follow(id);
  }

  let onUnfollow = () => {
    unFollow(id);
  }
  return (

    <div className={s.userItem}>
      <div className={s.userAva}>
        <NavLink to={'/profile/' + id}>
          <img className={s.avaImg} src={photos.small !== null ?
             photos.small : userPhoto} alt="ava" />
        </NavLink>
        {followed ?
          <button 
            disabled={followingInProgress.some(id => id === id)} 
            onClick={onUnfollow}>
              {followingInProgress.some(id => id === id) 
              ? <div className={s.spinner}></div>
              : 'Unfollow'}
          </button>
          :
          <button 
            disabled={followingInProgress.some(id => id === id)} 
            onClick={onFollow}>
              {followingInProgress.some(id => id === id) 
              ? <div className={s.spinner}></div>
              : 'Follow'}
          </button>}
      </div>

      <div className={s.userInfo}>
        <h3> {fullName} </h3>
        <p className={s.status}> {status} </p>
      </div>

    </div>

  );
}

export default UserItem;