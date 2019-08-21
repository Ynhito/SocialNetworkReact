import React from 'react';

class ProfileStatus extends React.Component {

  state = {
    editMode: false
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
  }

  render() {
    return (
      <div>
        {this.state.editMode &&
        <input autoFocus={true} onBlur={this.deactivateEditMode} type="text" value={this.props.profileData.aboutMe}/>
        }
        {!this.state.editMode &&
        <p onDoubleClick={ this.activateEditMode }>{this.props.profileData.aboutMe}</p>
        }
      </div>
    );
  }
}

export default ProfileStatus;