import {
    GET_LIST_OF_MARATHONS, SAVE_MARATHON, UPDATE_MARATHON, DELETE_MARATHON, MARATHON_BY_USER_ID, ADD_USER_TO_MARATHON
} from "../types"

const initialState = {
    marathons: [],
    savedMarathon: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case MARATHON_BY_USER_ID:
        case GET_LIST_OF_MARATHONS:
            console.log("get marathons")
            return {
                ...state,
                marathons: action.payload
            }
        case SAVE_MARATHON:
        case UPDATE_MARATHON:
            return {
                ...state,
                savedMarathon: action.payload
            }
        case DELETE_MARATHON:
            console.log(DELETE_MARATHON)
            return {
                ...state
            }
        case ADD_USER_TO_MARATHON:
            console.log(ADD_USER_TO_MARATHON)
            return {
                ...state
            }
        default:
            return {
                ...state
            }
    }
}
