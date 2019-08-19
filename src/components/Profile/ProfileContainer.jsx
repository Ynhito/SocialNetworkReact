import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getProfile} from '../../redux/profile-reducer';
import {Redirect, withRouter} from 'react-router-dom';


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
				if (!this.props.isAuth) return <Redirect to={'/login'} />;
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
				isAuth: state.auth.isAuth
		}
};

const mapDispatchToProps = {
		getProfile
};

let withRouterProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, mapDispatchToProps)(withRouterProfileContainer);