import React from 'react';
import s from './Users.module.scss';
import UserItem from './UserItem/UserItem';

const Users = (props) => {
  if (props.usersData.length === 0) {
    props.setUsers(
      [
        { id: 1, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png', followed: true, fullName: 'Dmitry', status: 'Hello world', location: { city: 'Omsk', country: 'Russia' } },
        { id: 2, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png', followed: true, fullName: 'Julia', status: 'I am women', location: { city: 'Omsk', country: 'Russia' } },
        { id: 3, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png', followed: false, fullName: 'Vlad', status: 'I in army', location: { city: 'Chita', country: 'Russia' } },
        { id: 4, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png', followed: false, fullName: 'Boris', status: 'I am cat', location: { city: 'Nazyvaevsk', country: 'Russia' } }
      ]
    )
  }
  let userElement = props.usersData
    .map(u => <UserItem
      fullName={u.fullName}
      status={u.status}
      location={u.location}
      photoUrl={u.photoUrl}
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