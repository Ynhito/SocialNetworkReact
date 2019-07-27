import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  let dialogsElement = props.dialogsData
    .map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);

  let messagesElement = props.messagesData
    .map(m => <Message message={m.message} key={m.id} id={m.id} />);

  let newMessageElement = React.createRef();

  let onSendMessage = () => {
    props.sendMessage();
  }

  let onMessageChange = () => {
    debugger
    let text = newMessageElement.current.value;
    props.onMessageChange(text);  
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
            value={props.newMessageText}
            placeholder="Введите сообщение"
          />
          <button onClick={onSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;