import { authAPI } from "../api/usersAPI";
import { initialize } from 'redux-form';
import { getAuthData } from './auth-reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
  initialized: false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      }
    default:
      return state;
  }

}

export let initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });
export const initializeApp = () => {
  return (dispatch) => {
    //debugger
    let promise = dispatch(getAuthData());
    Promise.all([promise])
    .then(() => {
      dispatch(initializedSuccess())
    })
    
  }
}

export default appReducer;
