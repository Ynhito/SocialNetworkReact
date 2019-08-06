import { connect } from 'react-redux';
import Users from './Users';
import { followAC, unFollowAC, setUsersAC, setTotalUsersCountAC, setCurrentPageAC } from '../../redux/users-reducer';

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;