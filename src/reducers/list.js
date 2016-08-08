const initialState = {
  colors: ['Red','Green','Blue','Yellow','Black','White','Orange'],
  local: false
}

export default function list(state = initialState) {

  if (localStorage.getItem('Colors')) {
    return {...state, colors: localStorage.getItem('Colors').split(',')}
  } else {
    return state;

  }
  // switch (action.type) {
  //
  //   case SET_COLOR_TO_LOCAL:
  //   return { ...state, colors: action.payload, local: true}
  //
  //   case GET_COLOR_FROM_LOCAL:
  //     return { ...state, colors: action.payload, local: true}
  //
  //   default:
  //     return state;
  // }

}
