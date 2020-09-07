import {
    GET_PROGRESSES_BY_TASK, GET_PROGRESSES_BY_USER, DELETE_PROGRESS, PROGRESS_SOLUTION
} from "../../../types"

const initialState = {
    progresses: [],
    taskAndSolution: undefined
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
        default:
            return {
                ...state
            }
    }
}
