import axios from "axios"
import {
    GET_PROGRESSES_BY_TASK, GET_PROGRESSES_BY_USER, DELETE_PROGRESS, PROGRESS_SOLUTION
} from "../../../types"

export const getProgressesByUser = userId => dispatch => {
    axios
        .get(`http://localhost:8081/progress/by_user/${userId}`)
        .then(res => {
            dispatch({
                type: GET_PROGRESSES_BY_USER,
                payload: res.data
            })
        })
}

export const getProgressesByTask = taskId => dispatch => {
    axios
        .get(`http://localhost:8081/progress/by_task/${taskId}`)
        .then(res => {
            dispatch({
                type: GET_PROGRESSES_BY_TASK,
                payload: res.data
            })
        })
}

export const deleteProgress = progressId => dispatch => {
    axios
        .delete(`http://localhost:8081/progress/delete/${progressId}`)
        .then(res => {
            dispatch({
                type: DELETE_PROGRESS,
                payload: res.data
            })
        })
}

export const getTaskAndSolutionByProgressId = progressId => dispatch => {
    console.log("action")
    axios
        .get(`http://localhost:8081/progress/solution_view/${progressId}`)
        .then(res => {
            dispatch({
                type: PROGRESS_SOLUTION,
                payload: res.data
            })
        })
}
