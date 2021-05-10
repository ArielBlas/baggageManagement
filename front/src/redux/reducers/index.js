import { combineReducers } from "redux"
import loggedUserReducer from "./loggedUserReducer"
import baggageReducer from "./baggageReducer"
import passengerReducer from "./passengerReducer"

export default combineReducers({
  loggedUserReducer,
  baggageReducer,
  passengerReducer,
})
