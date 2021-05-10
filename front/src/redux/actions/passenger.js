import axios from "axios"
import { SET_PASSENGERS, SET_PASSENGER_BAGGAGE } from "../constanst"

const setPassengersData = passengers => dispatch => {
  return dispatch({ type: SET_PASSENGERS, passengers })
}

const setPassengerBaggage = passengerBaggage => dispatch => {
  return dispatch({ type: SET_PASSENGER_BAGGAGE, passengerBaggage })
}

export const fetchAllPassengerBaggage = user => dispatch => {
  return axios
    .post("http://localhost:3200/api/flight_number/baggage", { user })
    .then(res => {
      return dispatch(setPassengersData(res.data))
    })
}

export const fetchPassengerBaggage = (passenger, user) => dispatch => {
  return axios
    .post("http://localhost:3200/api/flight_number_baggage/flight_number", {
      passenger,
      user,
    })
    .then(res => {
      return dispatch(setPassengerBaggage(res.data))
    })
}
