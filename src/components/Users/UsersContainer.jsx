import * as reactRedux from 'react-redux';
import Users from './Users';
import { 
  follow, 
  unFollow,  
  setTotalUsersCount, 
  setCurrentPage, 
   getUsers 
  } from '../../redux/users-reducer';
import React from 'react';
import { compose } from 'redux';
import {
    requestUsers,
    getPageSize,
    getTotalUsersCount,
    getCurrentPage,
    getIsFetching,
    getFollowingInProgress
} from '../../redux/users-selector';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.pageSize, this.props.currentPage);
  }
  onPageSelected = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(this.props.pageSize, pageNumber);
  };
  render() {
    return (
      <Users 
      {...this.props}
      onPageSelected={this.onPageSelected} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    usersData: requestUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
};

const mapDispatchToProps = {
  follow,
  unFollow,
  setTotalUsersCount,
  setCurrentPage,
  getUsers
};

export default compose(
  reactRedux.connect(mapStateToProps, mapDispatchToProps)
)(UsersContainer);

// export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);