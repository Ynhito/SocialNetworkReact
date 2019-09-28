import React, { useState, useEffect } from 'react';

const ProfileStatusHook = (props) => {

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.profileStatus)

  useEffect(() => {
    setStatus(props.profileStatus)
  }, [props.profileStatus])

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  }

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateProfileStatus(status)
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.profileStatus !== this.props.profileStatus) {
  //     this.setState({
  //       status: this.props.profileStatus
  //     })
  //   }
  // }
  return (
    <div>
      {!editMode &&
        <p onDoubleClick={activateEditMode}>
          {props.profileStatus ? props.profileStatus : 'изменить статус'}
        </p>
      }
      {editMode &&
        <input autoFocus={true}
          onBlur={deactivateEditMode}
          type="text"
          value={status}
          onChange={onStatusChange} />
      }
    </div>
  );
}

export default ProfileStatusHook;