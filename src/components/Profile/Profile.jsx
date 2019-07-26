import React from 'react';
//import s from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {

  return (
    <section>
      <ProfileInfo />
      <MyPostsContainer />
    </section>
  );
};

export default Profile;