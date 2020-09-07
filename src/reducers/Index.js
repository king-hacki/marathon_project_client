import { combineReducers } from "redux";
import MarathonReducer from "../components/admin/marathon/MarathonReducer";
import SprintReducer from "../components/admin/sprint/SprintReducer";
import TaskReducer from "../components/admin/task/TaskReducer";
import UserReducer from "../components/admin/user/UserReducer";
import ProgressReducer from "../components/admin/progress/ProgressReducer";

export default combineReducers({
    MarathonReducer,
    SprintReducer,
    TaskReducer,
    UserReducer,
    ProgressReducer
});