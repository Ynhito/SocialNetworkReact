import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postElement = props.postsData
    .map (p => <Post message={p.message} />);

  let newPostElement = React.createRef();



  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    console.log(text);
  }

  return (
    <div className={s.MyPosts}>
      <h3 className={s.PostTitle}>
        My Posts
      </h3>
      <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
      <button onClick={addPost}>Отправить</button>
      <div className={s.posts}>
        {postElement}
      </div>
    </div>

  );
};

export default MyPosts;