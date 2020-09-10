import {
    GET_LIST_OF_USERS,
    DELETE_USER,
    GET_USERS_BY_MARATHON,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOAD_USER,
    LOAD_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS
} from "../types"

const initialState = {
    users: [],
    isAuthenticated: false,
    role: [],
    firstName: "",
    lastName: "",
    email: "",
    id: null,
    registeredUser: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case REGISTER_SUCCESS:
            console.log(REGISTER_SUCCESS)
            return {
                ...state,
                registeredUser: action.payload
            }
        case GET_USERS_BY_MARATHON:
        case GET_LIST_OF_USERS:
            console.log(GET_LIST_OF_USERS)
            return {
                ...state,
                users: action.payload
            }
        case DELETE_USER:
            console.log(DELETE_USER)
            return {
                ...state
            }
        case LOGIN_SUCCESS:
            console.log(LOGIN_SUCCESS)
            localStorage.setItem("token", action.payload.accessToken)
            return {
                ...state,
                isAuthenticated: true,
                role: action.payload.role
            }
        case LOAD_USER:
            console.log(LOAD_USER)
            return {
                ...state,
                isAuthenticated: true,
                role: action.payload.roleDto.map(role => role.name),
                id: action.payload.id,
                email: action.payload.email,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName
            }
        case LOAD_FAIL:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
            console.log("clear")
            localStorage.removeItem("token")
            return {
                ...state,
                isAuthenticated: false,
                role: [],
                firstName: "",
                lastName: "",
                email: "",
                id: null
            }
        default:
            return {
                ...state
            }
    }
}
