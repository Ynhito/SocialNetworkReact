import React from 'react';
import { addPost } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
  return {
    postsData: state.profile.postsData,
    newPostText: state.profile.newPostText
  }
}

const mapDispatchToProps = {
  addPost
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
