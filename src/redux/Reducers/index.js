import { combineReducers } from "redux";
import userReducer from "./userReducer.js/userReducer"
import setMeeting from "./setmeeting/setmeeting"

const Reducers = combineReducers({
userReducer,
setMeeting
})

export default  Reducers;
