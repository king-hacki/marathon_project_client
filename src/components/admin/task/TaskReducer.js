import {
    GET_LIST_OF_TASKS, DELETE_TASK, UPDATE_TASK, SAVE_TASK
} from "../../../types"

const initialState = {
    tasks: [],
    savedTasks: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_LIST_OF_TASKS:
            console.log(GET_LIST_OF_TASKS)
            return {
                ...state,
                tasks: action.payload
            }
        case DELETE_TASK:
            console.log(DELETE_TASK)
            return {
                ...state
            }
        case UPDATE_TASK:
        case SAVE_TASK:
            console.log(SAVE_TASK)
            return {
                ...state,
                savedTasks: action.payload
            }
        default:
            return {
                ...state
            }
    }
}
