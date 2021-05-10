import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import { connect } from "react-redux"
import { fetchCreateFlghtNumber } from "../../../redux/actions/flightNumber"
import Layout from "../../../components/Layout"
import FlightNumber from "../../../components/Passenger"

const FlightNumberCreate = ({ fetchCreateFlghtNumber, isLogged }) => {
  const [flight_number, setFlight_number] = useState("")
  const [message, setMessage] = useState("")

  useEffect(() => {
    if (!isLogged.id) {
      return navigate("/")
    }
  }, [])

  const handleFlightInput = event => {
    setFlight_number(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (/^(?=.*\d)(?=.*[a-z])[a-z0-9]{5,5}$/.test(flight_number)) {
      fetchCreateFlghtNumber(flight_number, isLogged).then(res => {
        if (res.id) {
          navigate("/administrator/panel")
        }
        setMessage(res.message)
      })
    } else {
      setMessage("El numero de vuelo no es alfanumérico de 5 dígitos")
    }
  }

  return (
    <Layout>
      <FlightNumber
        handleFlightInput={handleFlightInput}
        handleSubmit={handleSubmit}
        flight_number={flight_number}
        user={isLogged}
        message={message}
        admin={true}
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
    fetchCreateFlghtNumber: (name, user) =>
      dispatch(fetchCreateFlghtNumber(name, user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightNumberCreate)
