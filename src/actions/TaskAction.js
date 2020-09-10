import axios from "axios"
import {
    GET_LIST_OF_TASKS, SAVE_TASK, DELETE_TASK, UPDATE_TASK, GET_TASK_BY_ID
} from "../types"
import {setToken} from "./UserAction";

export const getListOfTasks = sprintId => dispatch => {
    axios
        .get(`http://localhost:8081/task/${sprintId}`, setToken())
        .then(res => {
            dispatch({
                type: GET_LIST_OF_TASKS,
                payload: res.data
            })
        })
}

export const getTaskById = taskId => dispatch => {
    axios
        .get(`http://localhost:8081/task/by_id/${taskId}`, setToken())
        .then(res => {
            dispatch({
                type: GET_TASK_BY_ID,
                payload: res.data
            })
        })
}

export const addTask = (title, taskDescription, statusName, sprintId)  => dispatch => {
    const body = JSON.stringify({title, taskDescription, statusName, sprintId})
    axios
        .post(`http://localhost:8081/task/save`, body, setToken())
        .then(res => {
            dispatch({
                type: SAVE_TASK,
                payload: res.data
            })
        })
    dispatch(getListOfTasks(sprintId))
}

export const updateTask = (title, taskDescription, statusName, sprintId, id) => dispatch => {
    const body = JSON.stringify({title, taskDescription, statusName, sprintId, id})
    axios
        .put(`http://localhost:8081/task/update`, body, setToken())
        .then(res => {
            dispatch({
                type: UPDATE_TASK,
                payload: res.data
            })
            dispatch(getListOfTasks(sprintId))
        })
}

export const deleteTask = (taskId, sprintId) => dispatch => {
    axios
        .delete(`http://localhost:8081/task/delete/${taskId}`, setToken())
        .then(res => {
            dispatch({
                type: DELETE_TASK
            })
            dispatch(getListOfTasks(sprintId))
        })
}

