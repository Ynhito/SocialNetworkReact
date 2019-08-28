import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form'
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../../assets/common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {
  let postElement = props.postsData
    .map (p => <Post message={p.message} key={p.id} />);
  
  let addNewPost = (formData) => {
    props.addPost(formData.newPostBody);
  }

  return (
    <div className={s.MyPosts}>
      <div className={s.newPostInput}>
        <PostFormRedux onSubmit={addNewPost} />
      </div>
      <div className={s.posts}>
        {postElement}
      </div>
    </div>

  );
};

const postFrom = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field placeholder="Что у вас нового?" 
      component={Textarea} 
      name="newPostBody"
      validate={[required, maxLength10]}/>
        <button>Send</button>
    </form>
  );
}

const PostFormRedux = reduxForm({
  form: "addNewPost"
})(postFrom)

export default MyPosts;