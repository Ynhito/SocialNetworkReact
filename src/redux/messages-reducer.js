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
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: 4,
        message: action.newMessage
      };
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
      };
    default:
      return state;
  }
}

export let sendMessage = (newMessage) => ({ type: SEND_MESSAGE, newMessage });

export default messagesReducer;