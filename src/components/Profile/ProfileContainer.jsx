import React from 'react';
import Profile from './Profile';
import Axios from 'axios';
import {connect} from 'react-redux';
import {setUserProfile,toggleIsFetchingProfile} from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 1375;
    };
    this.props.toggleIsFetchingProfile(true);
    Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(response => {
        this.props.toggleIsFetchingProfile(false);
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
    profileData: state.profile.profileData,
    isFetching: state.profile.isFetching
  }
};

const mapDispatchToProps = {
  setUserProfile,
  toggleIsFetchingProfile
}

let withRouterProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, mapDispatchToProps)(withRouterProfileContainer);