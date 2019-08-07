import { connect } from 'react-redux';
import Users from './Users';
import { followAC, unFollowAC, setUsersAC, setTotalUsersCountAC, setCurrentPageAC } from '../../redux/users-reducer';
import React from 'react';
import Axios from 'axios';

class UsersContainer extends React.Component {

  componentDidMount() {
    Axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }

  onPageSelected = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    Axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
      .then(response => {
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
      onPageSelected={this.onPageSelected} />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    usersData: state.users.usersData,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unFollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: (usersCount) => {
      dispatch(setTotalUsersCountAC(usersCount))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
