import { createStore, combineReducers } from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import friendsReducer from "./friends-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profile : profileReducer,
    messages : messagesReducer,
    friends : friendsReducer,
    users : usersReducer
});


let store = createStore(reducers);

export default store;
window.store = store;