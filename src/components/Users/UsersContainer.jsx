import { connect } from 'react-redux';
import Users from './Users';
import { follow, unFollow,  
  setTotalUsersCount, setCurrentPage, 
   getUsers } from '../../redux/users-reducer';
import React from 'react';
import { compose } from 'redux';

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
  setTotalUsersCount,
  setCurrentPage,
  getUsers
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(UsersContainer);

// export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);