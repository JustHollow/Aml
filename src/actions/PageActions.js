import {
    SET_COLOR_TO_LOCAL,
    GET_COLOR_FROM_LOCAL,
    FAIL_GET_FROM_LOCAL
} from '../constants/List'

export function setColors(colors) {
    localStorage.setItem('Colors', colors);
    return (dispatch) => {
        dispatch({
            type: SET_COLOR_TO_LOCAL,
            payload: colors
        })
    }
}
export function getColors() {
    if (typeof localStorage.getItem('Colors') === 'string') {
        let localColors = localStorage.getItem('Colors').split(',')
        console.log(localColors);
        return (dispatch) => {
            dispatch({
                type: GET_COLOR_FROM_LOCAL,
                payload: localColors
            })
        }
    } else {
        return (dispatch) => {
            dispatch({
                type: FAIL_GET_FROM_LOCAL,
            })
        }
    }

}

export function GRAPH_BAR() {
    return (dispatch) => {
        dispatch({
            type: 'GRAPH_SWITCH_BAR',
            payload: 'bar'
        })
    }
}
export function GRAPH_LINE() {
    return (dispatch) => {
        dispatch({
            type: 'GRAPH_SWITCH_LINE',
            payload: 'line'
        })
    }
}
