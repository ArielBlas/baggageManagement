import React, { useState, useEffect } from "react"
import { connet } from "gatsby"
import { navigate } from "gatsby"
import { connect } from "react-redux"
import Layout from "../../components/Layout"
import Create from "../../components/Passenger/Create"
import {
  fetchBaggageCreate,
  fetchFlightNumberName,
} from "../../redux/actions/baggage"

const PassengerCreate = ({
  isLogged,
  baggage,
  fetchBaggageCreate,
  fetchFlightNumberName,
}) => {
  const [name, setName] = useState("")
  const [flight_number, setFlight_number] = useState("")
  const [message, setMessage] = useState("")

  useEffect(() => {
    if (baggage.grandes >= 0 || baggage.pequeños >= 0 || baggage.prendas >= 0) {
      return null
    } else {
      return navigate("/")
    }
  }, [])

  const handleNameInput = event => {
    setName(event.target.value)
  }

  const handleFlightInput = event => {
    setFlight_number(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (/^(?=.*\d)(?=.*[a-z])[a-z0-9]{5,5}$/.test(flight_number)) {
      fetchFlightNumberName(flight_number)
        .then(flightNumber => {
          if (flightNumber.id) {
            fetchBaggageCreate(baggage, flightNumber.id, name).then(res => {
              if (res.length >= 1) {
                navigate("/")
              }
              setMessage(res.message)
            })
          } else {
            setMessage(flightNumber.message)
          }
        })
        .catch(err => console.log(err))
    } else {
      setMessage("El numero de vuelo no es alfanumérico de 5 dígitos")
    }
  }

  return (
    <Layout>
      <Create
        handleNameInput={handleNameInput}
        handleFlightInput={handleFlightInput}
        handleSubmit={handleSubmit}
        name={name}
        flight_number={flight_number}
        user={isLogged}
        baggage={baggage}
        message={message}
      />
    </Layout>
  )
}

const mapStateToProps = state => {
  return {
    isLogged: state.loggedUserReducer.isLogged,
    baggage: state.baggageReducer.baggage,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBaggageCreate: (baggageId, flightNumberId, nickName) =>
      dispatch(fetchBaggageCreate(baggageId, flightNumberId, nickName)),
    fetchFlightNumberName: name => dispatch(fetchFlightNumberName(name)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PassengerCreate)
