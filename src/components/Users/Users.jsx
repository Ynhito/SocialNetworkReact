import React from 'react';
import s from './Users.module.scss';
import UserItem from './UserItem/UserItem';
import Axios from 'axios';

class Users extends React.Component {
  
  componentDidMount() {
    Axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }

  onPageSelected = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    Axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }


  render() {

    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }

    return (
      <div className={s.users}>
        <div className={s.usersContainer}>
          {this.props.usersData
            .map(u => <UserItem
              fullName={u.name}
              status={u.status}
              photos={u.photos}
              followed={u.followed}
              follow={this.props.follow}
              unfollow={this.props.unfollow}
              id={u.id}
              key={u.id}
            />)}
        </div>
        <div className={s.pageNav}>
          {pages.map(p => {
            return <button onClick={ (e) => this.onPageSelected(p)} className={this.props.currentPage === p && s.selectedPage}>{p}</button>
          })}
        </div>
        <button className={s.showMore}>Show more</button>
      </div>
    );
  }
}
export default Users;