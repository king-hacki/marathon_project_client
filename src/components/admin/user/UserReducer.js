import {
    GET_LIST_OF_USERS, DELETE_USER, GET_USERS_BY_MARATHON
} from "../../../types"

const initialState = {
    users: [],
    savedUser: null
}

export default function (state = initialState, action) {
    switch (action.type) {
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
        // case UPDATE_TASK:
        // case SAVE_TASK:
        //     console.log(SAVE_TASK)
        //     return {
        //         ...state,
        //         savedTasks: action.payload
        //     }
        default:
            return {
                ...state
            }
    }
}
