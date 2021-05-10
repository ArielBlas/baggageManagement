import axios from "axios"

export const fetchCreateFlghtNumber = (name, user) => dispatch => {
  return axios
    .post(`http://localhost:3200/api/flight_number/create`, {
      name,
      user,
    })
    .then(res => {
      return res.data
    })
}
