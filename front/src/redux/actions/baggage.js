import axios from "axios"
import { SET_BAGGAGE } from "../constanst"

export const setBaggageData = baggage => dispatch => {
  return dispatch({ type: SET_BAGGAGE, baggage })
}

export const fetchBaggageCreate = (
  baggageId,
  flightNumberId,
  nickName
) => dispatch => {
  return axios
    .post("http://localhost:3200/api/flight_number_baggage/create", {
      baggageId,
      flightNumberId,
      nickName,
    })
    .then(res => {
      return res.data
    })
}

export const fetchFlightNumberName = name => dispatch => {
  return axios
    .post(`http://localhost:3200/api/flight_number/name/`, { name })
    .then(res => {
      return res.data
    })
}

export const fetchUpdateStatus = (status, id, user) => dispatch => {
  return axios
    .put(`http://localhost:3200/api/flight_number/status`, {
      status,
      id,
      user,
    })
    .then(res => {
      return res.data
    })
}
