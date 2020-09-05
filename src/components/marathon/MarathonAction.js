import axios from "axios"
import {
    GET_LIST_OF_MARATHONS, SAVE_MARATHON, UPDATE_MARATHON, DELETE_MARATHON
} from "../../types"

export const getListOfMarathons = () => dispatch => {
    axios
        .get(`http://localhost:8081/marathon/list`)
        .then(res => {
            dispatch({
                type: GET_LIST_OF_MARATHONS,
                payload: res.data
            })
        })
}

export const deleteMarathon = marathonId => dispatch => {
    axios
        .delete(`http://localhost:8081/marathon/delete/${marathonId}`)
        .then(res => {
            dispatch({
                type: DELETE_MARATHON
            })
            dispatch(getListOfMarathons())
        })
}

export const addMarathon = title => dispatch => {
    const body = JSON.stringify({title})
    const config = {
        headers : {
            "Content-Type" : "application/json",
        }
    }
    axios
        .post(`http://localhost:8081/marathon/save`, body, config)
        .then(res => {
            dispatch({
                type: SAVE_MARATHON,
                payload: res.data
            })
        })
}

export const updateMarathon = (title, id) => dispatch => {
    const body = JSON.stringify({title, id})
    const config = {
        headers : {
            "Content-Type" : "application/json",
        }
    }
    axios
        .put(`http://localhost:8081/marathon/update`, body, config)
        .then(res => {
            dispatch({
                type: UPDATE_MARATHON,
                payload: res.data
            })
            dispatch(getListOfMarathons())
        })
}


