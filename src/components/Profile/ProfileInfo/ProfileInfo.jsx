import React from 'react';
import s from './ProfileInfo.module.scss';

const ProfileInfo = () => {
  return (
    <div className={s.ProfileInfo}>
      <img className={s.imageBackground} src='http://lazerdiscs.com/wp-content/uploads/2015/11/80s-Synthwave-And-Retrowave-Background-Pack-07.jpg' />
      <div className={s.discription_block}>
        <img className={s.imageAvatar} src="https://pp.userapi.com/c854428/v854428447/7f6a5/Jk3lwrgpMkw.jpg?ava=1" alt="Avatar"/>
        <div className={s.discription}>
          discription
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;