import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';

// const MyPostsContainer = (props) => {

//   //let state = props.store.getState();

//   // let addPost = () => {
//   //   props.store.dispatch(addPostActionCreator()); //return {type: ADD_POST}
//   // }

//   // let onPostChange = (text) => {
//   //   props.store.dispatch(updateNewPostTextActionCreator(text)); //return {type: UPDATE_NEW_POST_TEXT, newText: text}
//   // }
//   return (
//     <StoreContext.Consumer> 
//     {
//       (store) => {
//         let state = store.getState();
//         let addPost = () => {
//           store.dispatch(addPostActionCreator()); //return {type: ADD_POST}
//         }
      
//         let onPostChange = (text) => {
//           store.dispatch(updateNewPostTextActionCreator(text)); //return {type: UPDATE_NEW_POST_TEXT, newText: text}
//         }
//         return (
//           <MyPosts
//             updateNewPostText={onPostChange}
//             addPost={addPost}
//             postsData={state.profile.postsData}
//             newPostText={state.profile.newPostText}
//           />)
//       }
//     }
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return {
    postsData: state.profile.postsData,
    newPostText: state.profile.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost : () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;