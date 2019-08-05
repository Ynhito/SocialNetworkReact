const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  usersData: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        usersData: state.usersData.map(u => {
          if (u.id === action.userId) {
            return {
              ...u,
              followed: true
            }
          }
          return u;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        usersData: state.usersData.map(u => {
          if (u.id === action.userId) {
            return {
              ...u,
              followed: false
            }
          }
          return u;
        })
      }
    case SET_USERS:
      return {
        ...state,
        usersData: [...state.usersData, ...action.users]
      }
    default:
      return state;
  }

}

export let followAC = (userId) => ({ type: FOLLOW, userId });
export let unFollowAC = (userId) => ({ type: UNFOLLOW, userId });
export let setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
