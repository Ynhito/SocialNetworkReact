import {connect} from 'react-redux';
import FriendsList from './FriendsList';

let mapStateToProps = (state) => {
  return {
    friendsData: state.friends.friendsData
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

const FriendsListContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsList);


export default FriendsListContainer;