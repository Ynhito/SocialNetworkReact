const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

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
      ],
      newMessageText : ""
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
  _sendMessage() {
    let newMessage = {
      id: 4,
      message: this._state.messages.newMessageText,
    };
    this._state.messages.messagesData.push(newMessage);
    this._state.messages.newMessageText ='';
    this._callSubscriber(this._state);
  },
  _updateNewPostText(newText) {
    this._state.profile.newPostText = newText;
    this._callSubscriber(this._state);
  },
  _updateNewMessageText(newText) {
    this._state.messages.newMessageText = newText;
    this._callSubscriber(this._state);
  },
  dispatch(action) { //action === actionCreator (EX. addPostActionCreator)
    debugger;
    switch(action.type) {
      case ADD_POST:
        this._addPost();
        break;
      case UPDATE_NEW_POST_TEXT:
        this._updateNewPostText(action.newText);
        break;
      case UPDATE_NEW_MESSAGE_TEXT:
        this._updateNewMessageText(action.newText);
        break;
      case SEND_MESSAGE:
        this._sendMessage();
        break;
    }
  }
}


export let addPostActionCreator = () => ({type: ADD_POST});
export let sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export let updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT, 
  newText: text});
export let updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT, 
  newText: text});

export default store;

window.store = store;