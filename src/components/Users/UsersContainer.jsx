import { connect } from 'react-redux';
import Users from './Users';
import { followAC, unFollowAC, setUsersAC } from '../../redux/users-reducer';

let mapStateToProps = (state) => {
    return {
        usersData: state.users.usersData
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
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;