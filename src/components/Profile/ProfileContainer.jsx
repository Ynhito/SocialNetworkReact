import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfile,getProfileStatus,updateProfileStatus } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 1375;
      //userId = 2;
    }
    ;
    this.props.getProfile(userId);
    this.props.getProfileStatus(userId);
  }

  render() {
    return (
      <Profile {...this.props}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profileData: state.profile.profileData,
    isFetching: state.profile.isFetching,
    profileStatus: state.profile.profileStatus
  }
};

const mapDispatchToProps = {
  getProfile,
  getProfileStatus,
  updateProfileStatus
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withAuthRedirect
)(ProfileContainer);

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

// let withRouterProfileContainer = withRouter(AuthRedirectComponent);

// export default connect(mapStateToProps, mapDispatchToProps)(withRouterProfileContainer);