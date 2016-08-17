const initialState = {
  type: 'bar'
}

export default function graph(state = initialState, action) {

  switch (action.type) {

    case 'GRAPH_SWITCH_LINE':
    return { ...state, type: action.payload}

    case 'GRAPH_SWITCH_BAR':
      return { ...state, type: action.payload}

    default:
      return state;
  }

}
