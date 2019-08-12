import React from 'react';
import Header from './Header';
import Axios from 'axios';
import {connect} from 'react-redux';
import { setAuthUserData,toggleIsFetchingAuth } from '../../redux/auth-reducer'

class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetchingAuth(true);
    Axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true
    })
      .then(response => {
        this.props.toggleIsFetchingAuth(false)
        if (response.data.resultCode === 0) {
          let {id, email, login} = response.data.data;
          this.props.setAuthUserData(id, email, login)
        }
      })
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
  setAuthUserData,
  toggleIsFetchingAuth
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);