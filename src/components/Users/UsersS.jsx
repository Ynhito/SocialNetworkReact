import React from 'react';
import s from './Users.module.scss';
import UserItem from './UserItem/UserItem';
import Axios from 'axios';

const Users = (props) => {
  if (props.usersData.length === 0) {

    Axios.get('https://social-network.samuraijs.com/api/1.0/users?count=4')
      .then(response => {
        debugger
        props.setUsers(response.data.items)
      })
  }
  let userElement = props.usersData
    .map(u => <UserItem
      fullName={u.name}
      status={u.status}
      photos={u.photos}
      followed={u.followed}
      follow={props.follow}
      unfollow={props.unfollow}
      id={u.id}
      key={u.id}
    />)
  return (
    <div className={s.users}>
      <div className={s.usersContainer}>
        {userElement}
      </div>
      <button className={s.showMore}>Show more</button>
    </div>
  );
}

export default Users;