import axios from "axios"
import { LOGIN_AUTH } from "../constanst"

const loginAuth = data => ({
  type: LOGIN_AUTH,
  isLogged: data,
})

export const fetchLoginAdmin = (email, password) => dispatch => {
  return axios
    .post("http://localhost:3200/api/users/login", { email, password })
    .then(res => {
      return dispatch(loginAuth(res.data))
    })
}

export const fetchLoginPassenger = flight_number => dispatch => {
  return axios
    .post("http://localhost:3200/api/users/passenger", { flight_number })
    .then(res => {
      return dispatch(loginAuth(res.data))
    })
}

export const fetchLogout = () => dispatch => {
  return dispatch(loginAuth({}))
}
