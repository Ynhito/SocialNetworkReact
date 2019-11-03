import { usersAPI } from "../api/usersAPI";
import { updateObjectInArray } from "../utils/object-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
  usersData: [],
  pageSize: 4,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        usersData: updateObjectInArray(state.usersData,action.userId,"id",{followed: true})
      }
    case UNFOLLOW:
      return {
        ...state,
        usersData: updateObjectInArray(state.usersData,action.userId,"id",{followed: false})
      }
    case SET_USERS:
      return {
        ...state,
        usersData: action.users
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.usersCount
      }
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      }
    default:
      return state;
  }

}
// ActionCreators
export let followSuccess = (userId) => ({ type: FOLLOW, userId });
export let unFollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export let setUsers = (users) => ({ type: SET_USERS, users });
export let setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export let setTotalUsersCount = (usersCount) => ({ type: SET_TOTAL_USERS_COUNT, usersCount });
export let toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export let toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });

// ThunkCreators
export const getUsers = (pageSize, currentPage) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let response = await usersAPI.getUsers(pageSize, currentPage)
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(response.items));
        dispatch(setTotalUsersCount(response.totalCount));
  }
}

const followUnFollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(toggleFollowingProgress(true, userId));
  let response = await apiMethod(userId);
  if (response.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId) => {
  return async (dispatch) => {
    followUnFollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
  }
}
export const unFollow = (userId) => {
  return async (dispatch) => {
    followUnFollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unFollowSuccess)
  }
}

export default usersReducer;
