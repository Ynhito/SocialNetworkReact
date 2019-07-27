const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
  newMessageText: ''
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = state.newMessageText;
      return {
        ...state,
        messagesData: [...state.messagesData, { id: 4, message: newMessage }],
        newMessageText: ''
      };
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newText
      };
    default:
      return state;
  }
}

export let sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export let updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text
});

export default messagesReducer;