const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  usersData: [
    // { id: 1, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png', followed: true, fullName: 'Dmitry', status: 'Hello world', location: { city: 'Omsk', country: 'Russia' } },
    // { id: 2, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png', followed: true, fullName: 'Julia', status: 'I am women', location: { city: 'Omsk', country: 'Russia' } },
    // { id: 3, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png', followed: false, fullName: 'Vlad', status: 'I in army', location: { city: 'Chita', country: 'Russia' } },
    // { id: 4, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png', followed: false, fullName: 'Boris', status: 'I am cat', location: { city: 'Nazyvaevsk', country: 'Russia' } }
  ]
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
