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
        ...action.data,
        isAuth: true
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

export let setAuthUserData = (userId, email, login) => ({ type: SET_AUTH_USER_DATA, data: { userId, email, login } });
export let toggleIsFetchingAuth = (isFetching) => ({ type: TOGGLE_IS_FETCHING_AUTH, isFetching });

export default authReducer;
