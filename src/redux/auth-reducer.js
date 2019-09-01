import { authAPI } from "../api/usersAPI";
import { stopSubmit } from 'redux-form';

const SET_AUTH_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING_AUTH = 'TOGGLE_IS_FETCHING_AUTH';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.data
      }
    case TOGGLE_IS_FETCHING_AUTH:
      return {
        ...state,
        isFetching: action.isFetching
      }
    default:
      return state;
  }

}

export let setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_AUTH_USER_DATA, 
  data: { userId, email, login, isAuth } });
export let toggleIsFetchingAuth = (isFetching) => ({ type: TOGGLE_IS_FETCHING_AUTH, isFetching });

export const getAuthData = () => {
  return (dispatch) => {
    dispatch(toggleIsFetchingAuth(true));
    authAPI.getAuthData()
      .then(response => {
        dispatch(toggleIsFetchingAuth(false))
        if (response.resultCode === 0) {
          let {id, email, login} = response.data;
          dispatch(setAuthUserData(id, email, login, true))
        }
      })
  }
}
export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    dispatch(toggleIsFetchingAuth(true));
    authAPI.login(email, password, rememberMe)
      .then(response => {
        dispatch(toggleIsFetchingAuth(false))
        if (response.resultCode === 0) {
          dispatch(getAuthData());
        } else {
          let message = response.messages.length > 0 ? response.messages[0] : "Some error";
          dispatch(stopSubmit("login", {_error: message}))
        }
      })
  }
}
export const logout = () => {
  return (dispatch) => {
    dispatch(toggleIsFetchingAuth(true));
    authAPI.logout()
      .then(response => {
        dispatch(toggleIsFetchingAuth(false))
        if (response.resultCode === 0) {
          dispatch(setAuthUserData(null, null, null, false))
        }
      })
  }
}

export default authReducer;
