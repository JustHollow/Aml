import {
    SET_COLOR_TO_LOCAL,
    GET_COLOR_FROM_LOCAL,
    FAIL_GET_FROM_LOCAL
} from '../constants/List'

const initialState = {
    colors: ['Red', 'Green', 'Blue', 'Yellow', 'Black', 'White', 'Orange'],
    local: false
}

export default function list(state = initialState, action) {
    switch (action.type) {
        case SET_COLOR_TO_LOCAL:
            return {...state,
                colors: action.payload,
                local: true
            }

        case GET_COLOR_FROM_LOCAL:
            return {...state,
                colors: action.payload,
                local: true
            }

        case FAIL_GET_FROM_LOCAL:
            return state

        default:
            return state
    }
}
