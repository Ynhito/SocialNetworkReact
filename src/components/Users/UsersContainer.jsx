import { connect } from 'react-redux';
import Users from './Users';
import { follow, unFollow, setUsers, 
  setTotalUsersCount, setCurrentPage, toggleIsFetching,
  toggleFollowingProgress } from '../../redux/users-reducer';
import React from 'react';
import { usersAPI } from '../../api/usersAPI';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true);

    usersAPI.getUsers(this.props.pageSize, this.props.currentPage)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.items);
        this.props.setTotalUsersCount(response.totalCount)
      })
  }
  onPageSelected = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(this.props.pageSize, pageNumber)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.items)
      })
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
    usersData: state.users.usersData,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage,
    isFetching: state.users.isFetching,
    followingInProgress: state.users.followingInProgress
  }
};

const mapDispatchToProps = {
  follow,
  unFollow,
  setUsers,
  setTotalUsersCount,
  setCurrentPage,
  toggleIsFetching,
  toggleFollowingProgress
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
