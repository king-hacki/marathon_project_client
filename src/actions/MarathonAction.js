import axios from "axios"
import {
    GET_LIST_OF_MARATHONS,
    SAVE_MARATHON,
    UPDATE_MARATHON,
    DELETE_MARATHON,
    MARATHON_BY_USER_ID,
    ADD_USER_TO_MARATHON
} from "../types"
import {setToken} from "./UserAction";

export const getListOfMarathons = () => dispatch => {
    axios
        .get(`http://localhost:8081/marathon/list`, setToken())
        .then(res => {
            dispatch({
                type: GET_LIST_OF_MARATHONS,
                payload: res.data
            })
        })
}

export const getMarathonsByUserId = userId => dispatch => {
    axios
        .get(`http://localhost:8081/marathon/${userId}`, setToken())
        .then(res => {
            dispatch({
                type: MARATHON_BY_USER_ID,
                payload: res.data
            })
        })
}

export const addUserToMarathon = (email, marathonId) => dispatch => {
    const body = JSON.stringify({email, marathonId})
    axios
        .post(`http://localhost:8081/marathon/add_user`, body, setToken())
        .then(res => {
            dispatch({
                type: ADD_USER_TO_MARATHON
            })
        })
}

export const deleteMarathon = marathonId => dispatch => {
    axios
        .delete(`http://localhost:8081/marathon/delete/${marathonId}`, setToken())
        .then(res => {
            dispatch({
                type: DELETE_MARATHON
            })
            dispatch(getListOfMarathons())
        })
}

export const addMarathon = title => dispatch => {
    const body = JSON.stringify({title})
    axios
        .post(`http://localhost:8081/marathon/save`, body, setToken())
        .then(res => {
            dispatch({
                type: SAVE_MARATHON,
                payload: res.data
            })
        })
}

export const updateMarathon = (title, id) => dispatch => {
    const body = JSON.stringify({title, id})
    axios
        .put(`http://localhost:8081/marathon/update`, body, setToken())
        .then(res => {
            dispatch({
                type: UPDATE_MARATHON,
                payload: res.data
            })
            dispatch(getListOfMarathons())
        })
}


