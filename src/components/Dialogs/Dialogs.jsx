import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/messages-reducer';



const Dialogs = (props) => {
  let dialogsElement = props.state.dialogsData
    .map(d => <DialogItem name={d.name} id={d.id} />);

  let messagesElement = props.state.messagesData
    .map(m => <Message message={m.message} />);

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
            placeholder="Введите сообщение"
            ref={newMessageElement} 
            onChange={onMessageChange}
            value={props.newMessageText}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;