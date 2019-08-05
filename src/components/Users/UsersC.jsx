import React from 'react';
import s from './Users.module.scss';
import UserItem from './UserItem/UserItem';
import Axios from 'axios';

class Users extends React.Component {

  constructor(props) {
    super(props);

    Axios.get('https://social-network.samuraijs.com/api/1.0/users?count=4')
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  // userElement = () => this.props.usersData
  //   .map(u => <UserItem
  //     fullName={u.name}
  //     status={u.status}
  //     photos={u.photos}
  //     followed={u.followed}
  //     follow={this.props.follow}
  //     unfollow={this.props.unfollow}
  //     id={u.id}
  //     key={u.id}
  //   />)

  render() {
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
        <button className={s.showMore}>Show more</button>
      </div>
    );
  }
}

export default Users;