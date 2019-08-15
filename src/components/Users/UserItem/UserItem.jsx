import React from 'react';
import s from './../Users.module.scss';
import userPhoto from '../../../assets/images/768px-Circle-icons-profile.svg.png';
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../../api/usersAPI';

const UserItem = (props) => {

  let follow = () => {
    props.toggleFollowingProgress(true, props.id);
    usersAPI.follow(props.id)
      .then(response => {
        props.toggleFollowingProgress(false, props.id);
        if (response.resultCode == 0) {
          props.follow(props.id);
        }
      })
  }

  let unfollow = () => {
    props.toggleFollowingProgress(true, props.id);
    usersAPI.unfollow(props.id)
      .then(response => {
        props.toggleFollowingProgress(false, props.id);
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
          <button 
            disabled={props.followingInProgress.some(id => id === props.id)} 
            onClick={unfollow}>
              {props.followingInProgress.some(id => id === props.id) 
              ? <div className={s.spinner}></div>
              : 'Unfollow'}
          </button>
          :
          <button 
            disabled={props.followingInProgress.some(id => id === props.id)} 
            onClick={follow}>
              {props.followingInProgress.some(id => id === props.id) 
              ? <div className={s.spinner}></div>
              : 'Follow'}
          </button>}
      </div>

      <div className={s.userInfo}>
        <h3> {props.fullName} </h3>
        <p className={s.status}> {props.status} </p>
      </div>

    </div>

  );
}

export default UserItem;