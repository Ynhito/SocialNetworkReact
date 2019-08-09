import React from 'react';
import Profile from './Profile';
import Axios from 'axios';
import {connect} from 'react-redux';
import {setUserProfile} from '../../redux/profile-reducer'

class ProfileContainer extends React.Component {

  componentDidMount() {
    Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(response => {
        this.props.setUserProfile(response.data);
      })
  }

  render() {
    return (
      <Profile {...this.props}
      profileData={this.props.profileData}
      />
    );  
  }
}

const mapStateToProps = (state) => {
  return {
    profileData: state.profile.profileData
  }
};

const mapDispatchToProps = {
  setUserProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);