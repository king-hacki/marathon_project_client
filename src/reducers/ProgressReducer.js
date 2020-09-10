import {
    GET_PROGRESSES_BY_TASK,
    GET_PROGRESSES_BY_USER,
    DELETE_PROGRESS,
    PROGRESS_SOLUTION,
    GET_PROGRESS_BY_USER_AND_TASK,
    CREATE_PROGRESS
} from "../types"

const initialState = {
    progresses: [],
    taskAndSolution: undefined,
    userSolution: undefined
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PROGRESSES_BY_TASK:
        case GET_PROGRESSES_BY_USER:
            return {
                ...state,
                progresses: action.payload
            }
        case DELETE_PROGRESS:
            console.log(DELETE_PROGRESS)
            return {
                ...state
            }
        case PROGRESS_SOLUTION:
            console.log(PROGRESS_SOLUTION)
            return {
                ...state,
                taskAndSolution: action.payload
            }
        case GET_PROGRESS_BY_USER_AND_TASK:
            console.log(GET_PROGRESS_BY_USER_AND_TASK)
            return {
                ...state,
                userSolution: action.payload
            }
        case CREATE_PROGRESS:
            console.log(CREATE_PROGRESS)
            return {
                ...state
            }
        default:
            return {
                ...state
            }
    }
}
