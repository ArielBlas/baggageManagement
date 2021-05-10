import { LOGIN_AUTH } from "../constanst"

const initialState = {
  isLogged: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_AUTH:
      return { ...state, isLogged: action.isLogged }
    default:
      return state
  }
}
