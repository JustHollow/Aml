import {
  SET_COLOR_TO_LOCAL,
  GET_COLOR_FROM_LOCAL
} from '../constants/List'

export function setColors(colors) {

  return (dispatch) => {
    dispatch({
        type: SET_COLOR_TO_LOCAL,
        payload: () => {
          localStorage.setItem('Colors', colors)
        }
      })
  }
}
export function getColors() {
  return (dispatch) => {
    dispatch({
        type: GET_COLOR_FROM_LOCAL,
        payload: () => {
          localStorage.getItem('Colors')
        }
    })
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
