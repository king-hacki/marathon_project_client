import { combineReducers } from "redux";
import MarathonReducer from "./MarathonReducer";
import SprintReducer from "./SprintReducer";
import TaskReducer from "./TaskReducer";
import UserReducer from "./UserReducer";
import ProgressReducer from "./ProgressReducer";

export default combineReducers({
    MarathonReducer,
    SprintReducer,
    TaskReducer,
    UserReducer,
    ProgressReducer,
});