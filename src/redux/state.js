const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
  _state: {
    profile: {
      postsData: [
        { id: 1, message: 'Hi, how are you' },
        { id: 2, message: 'Its my first post' }
      ],
      newPostText: ''
    },
    messages: {
      dialogsData: [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Julia' },
        { id: 3, name: 'Victor' },
        { id: 4, name: 'Sasha' }
      ],
      messagesData: [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'Privet' },
        { id: 3, message: 'Aloha' }
  
      ]
    },
    friends: {
      friendsData: [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Julia' },
        { id: 3, name: 'Victor' }
      ]
    }
  },
  _callSubscriber() {
    console.log("state changed")
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  _addPost() {
    let newPost = {
      id: 3,
      message: this._state.profile.newPostText,
    };
    this._state.profile.postsData.push(newPost);
    this._state.profile.newPostText ='';
    this._callSubscriber(this._state);
  },
  _updateNewPostText(newText) {
    this._state.profile.newPostText = newText;
    this._callSubscriber(this._state);
  },
  dispatch(action) {
    // if (action.type === 'ADD-POST') {
    //   this._addPost();
    // } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
    //   this._updateNewPostText(action.newText);
    // }
    switch(action.type) {
      case ADD_POST:
        this._addPost();
        break;
      case UPDATE_NEW_POST_TEXT:
        this._updateNewPostText(action.newText);
        break;
    }
  }
}


export let addPostActionCreator = () => ({type: ADD_POST});
export let updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT, 
  newText: text}); 


export default store;

window.store = store;