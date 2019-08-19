import React from 'react';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/messages-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';



let mapStateToProps = (state) => {
  return {
    dialogsData: state.messages.dialogsData,
    messagesData: state.messages.messagesData,
    newMessageText: state.messages.newMessageText,
    isAuth: state.auth.isAuth
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage : () => {
      dispatch(sendMessageActionCreator());
    },
    onMessageChange: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    }
  }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;