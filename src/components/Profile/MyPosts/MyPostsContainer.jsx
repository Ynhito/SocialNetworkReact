import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {

  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator()); //return {type: ADD_POST}
  }

  let onPostChange = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text)); //return {type: UPDATE_NEW_POST_TEXT, newText: text}
  }
  return (
    
    <MyPosts 
      updateNewPostText={onPostChange}
      addPost={addPost}
      postsData={state.profile.postsData}
      newPostText={state.profile.newPostText}
    />

  );
};

export default MyPostsContainer;