import React, { useState } from "react"
import { navigate } from "gatsby"
import { connect } from "react-redux"
import Layout from "../../components/Layout"
import Baggage from "../../components/Passenger/Baggage"
import { setBaggageData } from "../../redux/actions/baggage"

const PassengerBaggage = ({ history, isLogged, setBaggageData, bag }) => {
  const [baggage, setBaggage] = useState({
    grandes: 0,
    pequeños: 0,
    prendas: 0,
  })
  const [max, setMax] = useState(0)

  const increase = (bag, campo) => {
    if (bag[campo] < 3 && max < 3) {
      bag[campo] = bag[campo] + 1
      setMax(max + 1)
      setBaggage({ ...bag })
    }
  }

  const decrease = (bag, campo) => {
    if (bag[campo] > 0 && max > 0) {
      bag[campo] = bag[campo] - 1
      setMax(max - 1)
      setBaggage({ ...bag })
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    setBaggageData(baggage)
    return navigate("/passenger/create")
  }

  return (
    <Layout>
      <Baggage
        handleSubmit={handleSubmit}
        baggage={baggage}
        increase={increase}
        decrease={decrease}
        max={max}
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
    setBaggageData: baggage => dispatch(setBaggageData(baggage)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PassengerBaggage)
