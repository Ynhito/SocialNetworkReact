import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  return (
    <section>
      <ProfileInfo {...props} />
      <MyPostsContainer />
    </section>
  );
};

export default Profile;