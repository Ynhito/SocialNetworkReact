import React from 'react';
import s from './Users.module.scss';
import UserItem from './UserItem/UserItem';
import Preloader from '../../assets/common/preloader/preloader';

const Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  let userElement = props.usersData
  .map(u => <UserItem
    fullName={u.name}
    status={u.status}
    photos={u.photos}
    followed={u.followed}
    follow={props.follow}
    unfollow={props.unfollow}
    key={u.id}
    id={u.id}
  />)

  return (
    <div className={s.users}>
      <div className={s.usersContainer}>

        { props.isFetching ? 
        <Preloader />
        :
        userElement }

      </div>
      <div className={s.pageNav}>

        {pages.map(p => {
          return <button onClick={(e) => props.onPageSelected(p)} className={props.currentPage === p ? s.selectedPage : s.btnPage}>{p}</button>
        })}
        
      </div>
      <button className={s.showMore}>Show more</button>
    </div>
  );
}
export default Users;