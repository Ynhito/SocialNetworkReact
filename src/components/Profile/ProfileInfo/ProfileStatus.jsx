import React from 'react';

class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.profileStatus
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })
    this.props.updateProfileStatus(this.state.status)
  }

  render() {
    return (
      <div>
        {this.state.editMode &&
        <input autoFocus={true} 
        onBlur={this.deactivateEditMode} 
        type="text" 
        value={this.state.status}
        onChange={this.onStatusChange}/>
        }
        {!this.state.editMode &&
        <p onDoubleClick={ this.activateEditMode }>{this.props.profileStatus}</p>
        }
      </div>
    );
  }
}

export default ProfileStatus;