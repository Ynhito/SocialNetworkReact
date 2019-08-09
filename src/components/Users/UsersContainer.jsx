import { connect } from 'react-redux';
import Users from './Users';
import { follow, unFollow, setUsers, setTotalUsersCount, setCurrentPage, toggleIsFetching } from '../../redux/users-reducer';
import React from 'react';
import Axios from 'axios';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true);
    Axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }

  onPageSelected = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    Axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items)
      })
  }
  render() {
    return (
      <Users 
      totalUsersCount={this.props.totalUsersCount}
      pageSize={this.props.pageSize}
      usersData={this.props.usersData}
      follow={this.props.follow}
      unfollow={this.props.unfollow}
      currentPage={this.props.currentPage}
      onPageSelected={this.onPageSelected}
      isFetching={this.props.isFetching} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    usersData: state.users.usersData,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage,
    isFetching: state.users.isFetching
  }
}

const mapDispatchToProps = {
  follow,
  unFollow,
  setUsers,
  setTotalUsersCount,
  setCurrentPage,
  toggleIsFetching
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
