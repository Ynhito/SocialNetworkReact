import React from 'react';
import s from './../Dialogs.module.scss';

const Message = (props) => {
  //let path = '/dialogs/' + props.id;
  return (
    <div className={s.message}>
      {props.message}
    </div>
  );
}

export default Message; 