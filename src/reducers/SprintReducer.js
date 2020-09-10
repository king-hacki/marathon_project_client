import {
    GET_LIST_OF_SPRINTS, SAVE_SPRINT, UPDATE_SPRINT, DELETE_SPRINT
} from "../types"

const initialState = {
    sprints: [],
    savedSprint: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_LIST_OF_SPRINTS:
            console.log(GET_LIST_OF_SPRINTS)
            return {
                ...state,
                sprints: action.payload
            }
        case UPDATE_SPRINT:
        case SAVE_SPRINT:
            console.log(SAVE_SPRINT)
            return {
                ...state,
                savedSprint: action.payload
            }
        case DELETE_SPRINT:
            console.log(DELETE_SPRINT)
            return {
                ...state
            }
        default:
            return {
                ...state
            }
    }
}
