const initialState = {
  type: 'bar'
}

export default function graph(state = initialState, action) {

  switch (action.type) {

    case 'GRAPH_SWITCH_LINE':
    return { ...state, type: 'line'}

    case 'GRAPH_SWITCH_BAR':
      return { ...state, type: 'bar'}

    default:
      return state;
  }

}
