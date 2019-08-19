import { usersAPI } from "../api/usersAPI";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const TOGGLE_IS_FETCHING_PROFILE = 'TOGGLE_IS_FETCHING_PROFILE';

let initialState = {
  postsData: [
    { id: 1, message: 'Hi, how are you' },
    { id: 2, message: 'Its my first post' }
  ],
  profileData: null,
  newPostText: '',
  isFetching: false
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 3,
        message: state.newPostText
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: ''
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
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
    default:
      return state;
  }

}
// ActionCreators
export let addPostActionCreator = () => ({ type: ADD_POST });
export let updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});
export let setUserProfile = (profileData) => ({
  type: SET_USER_PROFILE,
  profileData
});
export let toggleIsFetchingProfile = (isFetching) => ({ type: TOGGLE_IS_FETCHING_PROFILE, isFetching });

// ThunkCreators
export const getProfile = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFetchingProfile(true));
    usersAPI.getProfile(userId)
      .then(response => {
        dispatch(toggleIsFetchingProfile(false));
        dispatch(setUserProfile(response));
      })
  }
}

export default profileReducer;