import { SET_PASSENGERS, SET_PASSENGER_BAGGAGE } from "../constanst"

const initialState = {
  passengers: [],
  passengerBaggage: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PASSENGERS:
      return { ...state, passengers: action.passengers }
    case SET_PASSENGER_BAGGAGE:
      return { ...state, passengerBaggage: action.passengerBaggage }
    default:
      return state
  }
}
