import React from 'react';
import s from './Post.module.scss';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img className={s.imageAvarat} src="https://pp.userapi.com/c854428/v854428447/7f6a5/Jk3lwrgpMkw.jpg?ava=1" alt="PostLogo"/>
      <p>{props.message}</p>
    </div>
  );
};

export default Post;