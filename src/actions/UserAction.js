import axios from "axios"
import {
    GET_LIST_OF_USERS,
    DELETE_USER,
    GET_USERS_BY_MARATHON,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOAD_USER,
    LOAD_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from "../types"

export const registration = (firstName, lastName, email, password) => dispatch => {
    const body = JSON.stringify({firstName, lastName, email, password})
    const config = {
        headers : {
            "Content-Type" : "application/json"
        }
    }
    axios
        .post("http://localhost:8081/security/register", body, config)
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS
            })
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: REGISTER_FAIL
            })
        })
}

export const getListOfUsers = () => dispatch => {
    axios
        .get("http://localhost:8081/user/list", setToken())
        .then(res => {
            dispatch({
                type: GET_LIST_OF_USERS,
                payload: res.data
            })
        })
}

export const getUsersByMarathonId = marathonId => dispatch => {
    axios
        .get(`http://localhost:8081/user/marathon/${marathonId}`, setToken())
        .then(res => {
            dispatch({
                type: GET_USERS_BY_MARATHON,
                payload: res.data
            })
        })
}

export const deleteUser = userId => dispatch => {
    axios
        .delete(`http://localhost:8081/user/delete/${userId}`, setToken())
        .then(res => {
            dispatch({
                type: DELETE_USER
            })
            dispatch(getListOfUsers())
        })
}

export const signIn = (email, password) => dispatch => {
    const body = JSON.stringify({email, password})
    const config = {
        headers : {
            "Content-Type" : "application/json"
        }
    }
    axios
        .post("http://localhost:8081/security/signIn", body, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
            dispatch(loadUser())
        })
        .catch(err => {
            dispatch({
                type: LOGIN_FAIL
            })
        })
}

export const loadUser = () => dispatch => {
    axios
        .get("http://localhost:8081/security/load", setToken())
        .then(res => {
            dispatch({
                type: LOAD_USER,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: LOAD_FAIL
            })
        })
}

export const setToken = () => {
    const token = localStorage.getItem("token")
    const config = {
        headers : {
            "Content-Type" : "application/json",
        }
    }
    if(token) config.headers["Authorization"] = `Bearer ${token}`
    return config

}

export const logout = () => dispatch => dispatch({type: LOGOUT_SUCCESS})









