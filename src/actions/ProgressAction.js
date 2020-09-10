import axios from "axios"
import {
    GET_PROGRESSES_BY_TASK, GET_PROGRESSES_BY_USER, DELETE_PROGRESS, PROGRESS_SOLUTION, GET_PROGRESS_BY_USER_AND_TASK, CREATE_PROGRESS, UPDATE_PROGRESS
} from "../types"
import {setToken} from "./UserAction";

export const getProgressesByUser = userId => dispatch => {
    axios
        .get(`http://localhost:8081/progress/by_user/${userId}`, setToken())
        .then(res => {
            dispatch({
                type: GET_PROGRESSES_BY_USER,
                payload: res.data
            })
        })
}

export const getProgressesByTask = taskId => dispatch => {
    axios
        .get(`http://localhost:8081/progress/by_task/${taskId}`, setToken())
        .then(res => {
            dispatch({
                type: GET_PROGRESSES_BY_TASK,
                payload: res.data
            })
        })
}

export const deleteProgress = progressId => dispatch => {
    axios
        .delete(`http://localhost:8081/progress/delete/${progressId}`, setToken())
        .then(res => {
            dispatch({
                type: DELETE_PROGRESS,
                payload: res.data
            })
        })
}

export const getTaskAndSolutionByProgressId = progressId => dispatch => {
    axios
        .get(`http://localhost:8081/progress/solution_view/${progressId}`, setToken())
        .then(res => {
            dispatch({
                type: PROGRESS_SOLUTION,
                payload: res.data
            })
        })
}

export const progressByUserIdAndTaskId = (userId, taskId) => dispatch => {
    const body = JSON.stringify({userId, taskId})
    axios
        .post("http://localhost:8081/progress/solution_view", body, setToken())
        .then(res => {
            dispatch({
                type: GET_PROGRESS_BY_USER_AND_TASK,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err)
        })
}

export const createProgress = (taskId, userId, solution) => dispatch => {
    const body = JSON.stringify({taskId, userId, solution})
    axios
        .post("http://localhost:8081/progress/save", body, setToken())
        .then(res => {
            dispatch({
                type: CREATE_PROGRESS,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err)
        })
}

export const updateProgress = (taskId, userId, solution) => dispatch => {
    const body = JSON.stringify({taskId, userId, solution})
    axios
        .put("http://localhost:8081/progress/update", body, setToken())
        .then(res => {
            dispatch({
                type: UPDATE_PROGRESS,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err)
        })
}
