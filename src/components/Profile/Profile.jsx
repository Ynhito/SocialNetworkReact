import React from 'react';
import s from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

  return (
    <section>
      <ProfileInfo />
      <MyPosts postsData={props.state.postsData} 
      addPost={props.addPost} 
      newPostText={props.state.newPostText} />
    </section>
  );
};

export default Profile;