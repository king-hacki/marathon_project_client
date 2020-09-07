import axios from "axios"
import {
    GET_LIST_OF_USERS, DELETE_USER, GET_USERS_BY_MARATHON
} from "../../../types"

export const getListOfUsers = () => dispatch => {
    axios
        .get("http://localhost:8081/user/list")
        .then(res => {
            dispatch({
                type: GET_LIST_OF_USERS,
                payload: res.data
            })
        })
}

export const getUsersByMarathonId = marathonId => dispatch => {
    console.log("test")
    axios
        .get(`http://localhost:8081/user/marathon/${marathonId}`)
        .then(res => {
            dispatch({
                type: GET_USERS_BY_MARATHON,
                payload: res.data
            })
        })
}

export const deleteUser = userId => dispatch => {
    axios
        .delete(`http://localhost:8081/user/delete/${userId}`)
        .then(res => {
            dispatch({
                type: DELETE_USER
            })
            dispatch(getListOfUsers())
        })
}

