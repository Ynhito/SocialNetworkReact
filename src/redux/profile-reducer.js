import { profileAPI } from "../api/usersAPI";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const TOGGLE_IS_FETCHING_PROFILE = 'TOGGLE_IS_FETCHING_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  postsData: [
    { id: 1, message: 'Hi, how are you' },
    { id: 2, message: 'Its my first post' }
  ],
  profileData: null,
  isFetching: false,
  profileStatus: ''
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 3,
        message: action.newPostText
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profileData: action.profileData
      };
    case TOGGLE_IS_FETCHING_PROFILE:
      return {
        ...state,
        isFetching: action.isFetching
      }
    case SET_STATUS:
      return {
        ...state,
        profileStatus: action.newStatus
      }
    default:
      return state;
  }

}
// ActionCreators
export let addPost = (newPostText) => ({ type: ADD_POST, newPostText });
export let setUserProfile = (profileData) => ({
  type: SET_USER_PROFILE,
  profileData
});
export let toggleIsFetchingProfile = (isFetching) => ({ type: TOGGLE_IS_FETCHING_PROFILE, isFetching });
export let setStatus = (newStatus) => ({ type: SET_STATUS, newStatus });

// ThunkCreators
export const getProfile = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFetchingProfile(true));
    profileAPI.getProfile(userId)
      .then(response => {
        dispatch(toggleIsFetchingProfile(false));
        dispatch(setUserProfile(response));
      })
  }
}
export const getProfileStatus = (userId) => {
  return (dispatch) => {
    // dispatch(toggleIsFetchingProfile(true));
    profileAPI.getStatus(userId)
      .then(response => {
        // dispatch(toggleIsFetchingProfile(false));
        dispatch(setStatus(response));
      })
  }
}
export const updateProfileStatus = (status) => {
  return (dispatch) => {
    // dispatch(toggleIsFetchingProfile(true));
    profileAPI.updateStatus(status)
      .then(response => {
        if (response.resultCode === 0) {
          dispatch(setStatus(status));
        }
      })
  }
}

export default profileReducer;