import React from 'react';
import s from './ProfileInfo.module.scss';
import Preloader from '../../../assets/common/preloader/preloader';

const ProfileInfo = (props) => {

  if (!props.profileData) {
    return <Preloader />
  }

  return (
    <div className={s.ProfileInfo}>

      <div className={s.ava_follow_block}>
        <img className={s.imageAvatar} src={props.profileData.photos.large} alt="Avatar" />
        <button>Follow</button>
      </div>

      <div className={s.discription_block}>

        <div className={s.discription_block_top}>
          <h3 className={s.fullName}>{props.profileData.fullName}</h3>
          <p className={s.status}>{props.profileData.aboutMe}</p>
        </div>

        <div className={s.short_info}>
          <div className={s.lookingJobStatus_row}>
            <p className={s.lookingJob}>В поиске работы:</p>
            <a href="#">{props.profileData.lookingForAJob ? 'Да' : 'Нет'}</a>
          </div>
          <div className={s.lookingJobDiscription_row}>
            <p className={s.lookingJob_discription}>О поиске работы:</p>
            <a href="#">{props.profileData.lookingForAJobDescription}</a>
          </div>
        </div>

      </div>

    </div>
  );
};

export default ProfileInfo;