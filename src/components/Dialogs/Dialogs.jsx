import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {


  let dialogsElement = props.state.dialogsData
  .map(d => <DialogItem name={d.name} id={d.id} />);

  let messagesElement = props.state.messagesData
    .map(m => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {dialogsElement}
      </div>
      <div className={s.messages}>
        {messagesElement}
        <div className={s.inputArea}>
          <textarea></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;