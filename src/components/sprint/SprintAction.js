import axios from "axios"
import {
    GET_LIST_OF_SPRINTS, SAVE_SPRINT, UPDATE_SPRINT, DELETE_SPRINT
} from "../../types"

export const getListOfSprints = marathonId => dispatch => {
    axios
        .get(`http://localhost:8081/sprint/${marathonId}`)
        .then(res => {
            dispatch({
                type: GET_LIST_OF_SPRINTS,
                payload: res.data
            })
        })
}

export const addSprint = (title, startDate, finishDate, marathonId)  => dispatch => {
    const body = JSON.stringify({title, startDate, finishDate, marathonId})
    const config = {
        headers : {
            "Content-Type" : "application/json",
        }
    }
    axios
        .post(`http://localhost:8081/sprint/save`, body, config)
        .then(res => {
            dispatch({
                type: SAVE_SPRINT,
                payload: res.data
            })
        })
}

export const updateSprint = (title, startDate, finishDate, marathonId, id) => dispatch => {
    const body = JSON.stringify({title, startDate, finishDate, marathonId, id})
    const config = {
        headers : {
            "Content-Type" : "application/json",
        }
    }
    axios
        .put(`http://localhost:8081/sprint/update`, body, config)
        .then(res => {
            dispatch({
                type: UPDATE_SPRINT,
                payload: res.data
            })
            dispatch(getListOfSprints(marathonId))
        })
}

export const deleteSprint = (sprintId, marathonId) => dispatch => {
    axios
        .delete(`http://localhost:8081/sprint/delete/${sprintId}`)
        .then(res => {
            dispatch({
                type: DELETE_SPRINT
            })
            dispatch(getListOfSprints(marathonId))
        })
}