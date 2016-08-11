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

}
