import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import { getAuthData } from '../../redux/auth-reducer'

class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.getAuthData();
  }

  render(){
    return (
      <Header {...this.props} />
    );
  }
  
};
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    isFetching: state.auth.isFetching
  }
}

const mapDispatchToProps = {
  getAuthData
}

// let mapDispatchToProps = (dispatch) => {
//   return {
//     getAuthData : () => {
//       dispatch(getAuthData()); dispatch(thunk)
//     }
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);