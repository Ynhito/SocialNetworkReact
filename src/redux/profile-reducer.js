const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  postsData: [
    { id: 1, message: 'Hi, how are you' },
    { id: 2, message: 'Its my first post' }
  ],
  newPostText : ''
};

const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST:
      let newPost = {
        id: 3,
        message: state.newPostText
      };
      state.postsData.push(newPost);
      state.newPostText ='';
      break;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText; 
      break;
    default:
      return state;
  }
  return state;
}

export let addPostActionCreator = () => ({type: ADD_POST});
export let updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT, 
  newText: text});

export default profileReducer;