import { SET_BAGGAGE } from "../constanst"

const initialState = {
  baggage: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_BAGGAGE:
      return { ...state, baggage: action.baggage }
    default:
      return state
  }
}
