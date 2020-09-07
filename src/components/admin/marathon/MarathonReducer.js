import {
    GET_LIST_OF_MARATHONS, SAVE_MARATHON, UPDATE_MARATHON, DELETE_MARATHON
} from "../../../types"

const initialState = {
    marathons: [],
    savedMarathon: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_LIST_OF_MARATHONS:
            console.log(GET_LIST_OF_MARATHONS)
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
        default:
            return {
                ...state
            }
    }
}
