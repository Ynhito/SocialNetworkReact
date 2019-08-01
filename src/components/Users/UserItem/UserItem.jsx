import React from 'react';
import s from './../Users.module.scss';
import userPhoto from '../../../assets/images/768px-Circle-icons-profile.svg.png';

const UserItem = (props) => {

    let follow = () => {
        props.follow(props.id);
    }

    let unfollow = () => {
        props.unfollow(props.id);
    }

    return (
        <div className={s.userItem}>

            <div className={s.userAva}>
                <img src={props.photos.small !== null ? props.photos.small : userPhoto } alt="ava"/>
                {props.followed ? 
                <button onClick={unfollow}>Unfollow</button> 
                : 
                <button onClick={follow}>Follow</button>}
            </div>

            <div className={s.userInfo}>
                <h3> {props.fullName} </h3>
                <p className={s.status}> {props.status} </p>
                {/* <p className={s.country}> {props.location.country} </p> */}
                {/* <p className={s.city}> {props.location.city} </p> */}
            </div>
            
        </div>
    );

}

export default UserItem;