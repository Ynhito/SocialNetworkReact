import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/messages-reducer';



const Dialogs = (props) => {
  let dialogsElement = props.stateMessages.dialogsData
    .map(d => <DialogItem name={d.name} id={d.id} />);

  let messagesElement = props.stateMessages.messagesData
    .map(m => <Message message={m.message} id={m.id} />);

  let newMessageElement = React.createRef();

  let sendMessage = () => {
    props.dispatch(sendMessageActionCreator());
  }

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.dispatch(updateNewMessageTextActionCreator(text));
  }
  
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {dialogsElement}
      </div>
      <div className={s.messages}>
        {messagesElement}
        <div className={s.inputArea}>
          <textarea
            onChange={onMessageChange} 
            ref={newMessageElement} 
            value={props.stateMessages.newMessageText}
            placeholder="Введите сообщение"
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;