import React from 'react';
import s from './../Users.module.scss';
import userPhoto from '../../../assets/images/768px-Circle-icons-profile.svg.png';

class UserItem extends React.Component {

  follow = () => {
    this.props.follow(this.props.id);
  }

  unfollow = () => {
    this.props.unfollow(this.props.id);
  }

  render() {
    return (
      <div className={s.userItem}>

        <div className={s.userAva}>
          <img src={this.props.photos.small !== null ? this.props.photos.small : userPhoto} alt="ava" />
          {this.props.followed ?
            <button onClick={this.unfollow}>Unfollow</button>
            :
            <button onClick={this.follow}>Follow</button>}
        </div>

        <div className={s.userInfo}>
          <h3> {this.props.fullName} </h3>
          <p className={s.status}> {this.props.status} </p>
        </div>

      </div>
    );
  }
}

export default UserItem;