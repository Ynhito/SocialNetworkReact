import { createStore, combineReducers } from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import friendsReducer from "./friends-reducer";

let reducers = combineReducers({
    profile : profileReducer,
    messages : messagesReducer,
    friends : friendsReducer
});


let store = createStore(reducers);

export default store;