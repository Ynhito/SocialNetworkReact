import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfile } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 1375;
    }
    ;
    this.props.getProfile(userId);
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
    isFetching: state.profile.isFetching,
  }
};

const mapDispatchToProps = {
  getProfile
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withAuthRedirect
)(ProfileContainer);

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

// let withRouterProfileContainer = withRouter(AuthRedirectComponent);

// export default connect(mapStateToProps, mapDispatchToProps)(withRouterProfileContainer);