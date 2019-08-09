import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {

  return (
    <section>
      <ProfileInfo profileData={props.profileData} />
      <MyPostsContainer />
    </section>
  );
};

export default Profile;