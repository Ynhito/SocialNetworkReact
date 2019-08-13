import React from 'react';
import s from './../Users.module.scss';
import userPhoto from '../../../assets/images/768px-Circle-icons-profile.svg.png';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';

const UserItem = (props) => {

  let follow = () => {
    Axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {}, {
      withCredentials: true,
      headers: {
        "API-KEY": "0794f75a-9048-48f2-a851-598440e411fc"
      }
    })
      .then(response => {
        if (response.data.resultCode == 0) {
          props.follow(props.id);
        }
      })
  }

  let unfollow = () => {
    Axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {
      withCredentials: true,
      headers: {
        "API-KEY": "0794f75a-9048-48f2-a851-598440e411fc"
      }
    })
      .then(response => {
        if (response.data.resultCode == 0) {
          props.unfollow(props.id);
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