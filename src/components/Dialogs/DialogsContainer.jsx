import React from 'react';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/messages-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';


const DialogsContainer = (props) => {

  // let state = props.store.getState();

  // let sendMessage = () => {
  //   props.store.dispatch(sendMessageActionCreator());
  // }

  // let onMessageChange = (text) => {
  //   props.store.dispatch(updateNewMessageTextActionCreator(text));
  // }

  return (
    <StoreContext.Consumer > 
    {
      (store) => {
        let state = store.getState();

        let sendMessage = () => {
          store.dispatch(sendMessageActionCreator());
        }

        let onMessageChange = (text) => {
          store.dispatch(updateNewMessageTextActionCreator(text));
        }
        return (
          <Dialogs
            sendMessage={sendMessage}
            onMessageChange={onMessageChange}
            dialogsData={state.messages.dialogsData}
            messagesData={state.messages.messagesData}
            newMessageText={state.messages.newMessageText}
          />
        )
      }
    }
    </StoreContext.Consumer>
  );
}

export default DialogsContainer;