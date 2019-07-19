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
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("state changed")
  },
  addPost() {
    let newPost = {
      id: 3,
      message: this._state.profile.newPostText,
    };
    this._state.profile.postsData.push(newPost);
    this._state.profile.newPostText ='';
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profile.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  }
}


export default store;

window.store = store;