import React, { useEffect } from "react"
import { navigate } from "gatsby"
import { connect } from "react-redux"
import { fetchPassengerBaggage } from "../../../redux/actions/passenger"
import Layout from "../../../components/Layout"
import Panel from "../../../components/Passenger/Panel"

const AdminPassengerId = ({
  id,
  fetchPassengerBaggage,
  passengerBaggage,
  isLogged,
}) => {
  useEffect(() => {
    if (isLogged.id) {
      fetchPassengerBaggage(id, isLogged)
    } else {
      navigate("/")
    }
  }, [])

  return (
    <Layout>
      <Panel user={passengerBaggage} admin={true} />
    </Layout>
  )
}

const mapStateToProps = state => {
  return {
    passengerBaggage: state.passengerReducer.passengerBaggage,
    isLogged: state.loggedUserReducer.isLogged,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPassengerBaggage: (passenger, user) =>
      dispatch(fetchPassengerBaggage(passenger, user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPassengerId)
