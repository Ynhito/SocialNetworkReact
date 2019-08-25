import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form'

const Dialogs = (props) => {
  let dialogsElement = props.dialogsData
    .map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);

  let messagesElement = props.messagesData
    .map(m => <Message message={m.message} key={m.id} id={m.id} />);

  const addNewMessage = (formData) => {
    props.sendMessage(formData.newMessage)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {dialogsElement}
      </div>
      <div className={s.messages}>
        {messagesElement}
        <div className={s.inputArea}>
          <MessagesReduxForm onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  );
}

const MessagesForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field placeholder="Введите сообщение" component="textarea" name="newMessage" />
      <button>Send</button>
    </form>
  );
}

const MessagesReduxForm = reduxForm({
  // a unique name for the form
  form: 'message'
})(MessagesForm)

export default Dialogs;