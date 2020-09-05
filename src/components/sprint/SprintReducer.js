import {
    GET_LIST_OF_SPRINTS
} from "../types"

const initialState = {
    sprints: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_LIST_OF_SPRINTS:
            console.log(GET_LIST_OF_SPRINTS)
            return {
                ...state,
                sprints: action.payload
            }
        default:
            return {
                ...state
            }
    }
}
