import axios from "axios"
import {
    GET_LIST_OF_TASKS, SAVE_TASK, DELETE_TASK, UPDATE_TASK
} from "../../../types"

export const getListOfTasks = sprintId => dispatch => {
    axios
        .get(`http://localhost:8081/task/${sprintId}`)
        .then(res => {
            dispatch({
                type: GET_LIST_OF_TASKS,
                payload: res.data
            })
        })
}

export const addTask = (title, taskDescription, statusName, sprintId)  => dispatch => {
    const body = JSON.stringify({title, taskDescription, statusName, sprintId})
    const config = {
        headers : {
            "Content-Type" : "application/json",
        }
    }
    axios
        .post(`http://localhost:8081/task/save`, body, config)
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
    const config = {
        headers : {
            "Content-Type" : "application/json",
        }
    }
    axios
        .put(`http://localhost:8081/task/update`, body, config)
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
        .delete(`http://localhost:8081/task/delete/${taskId}`)
        .then(res => {
            dispatch({
                type: DELETE_TASK
            })
            dispatch(getListOfTasks(sprintId))
        })
}

