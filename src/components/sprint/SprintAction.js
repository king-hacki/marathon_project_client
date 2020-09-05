import axios from "axios"
import {GET_LIST_OF_SPRINTS} from "../types"

export const getListOfSprints = marathonId => dispatch => {
    axios
        .get(`http://localhost:8081/sprint/${marathonId}`)
        .then(res => {
            dispatch({
                type: GET_LIST_OF_SPRINTS,
                payload: res.data
            })
        })
}