import React, { useState } from "react"
import { navigate } from "gatsby"
import { connect } from "react-redux"
import { fetchLoginPassenger } from "../../redux/actions/loggedUser"
import Layout from "../../components/Layout"
import Passenger from "../../components/Passenger"

const IndexPassenger = ({ fetchLoginPassenger, isLogged }) => {
  const [flight_number, setFlight_number] = useState("")
  const [message, setMessage] = useState("")

  const handleFlightInput = event => {
    setFlight_number(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (/^(?=.*\d)(?=.*[a-z])[a-z0-9]{5,5}$/.test(flight_number)) {
      fetchLoginPassenger(flight_number).then(res => {
        if (res.isLogged.id) {
          return navigate("/passenger/panel")
        }
        setMessage(res.isLogged.message)
      })
    } else {
      setMessage("El numero de vuelo no es alfanumérico de 5 dígitos")
    }
  }

  return (
    <Layout>
      <Passenger
        handleFlightInput={handleFlightInput}
        handleSubmit={handleSubmit}
        flight_number={flight_number}
        user={isLogged}
        message={message}
      />
    </Layout>
  )
}

const mapStateToProps = state => {
  return {
    isLogged: state.loggedUserReducer.isLogged,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchLoginPassenger: flight_number =>
      dispatch(fetchLoginPassenger(flight_number)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(IndexPassenger)
