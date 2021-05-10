import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import { connect } from "react-redux"
import Layout from "../../components/Layout"
import Panel from "../../components/Passenger/Panel"
import { fetchLogout } from "../../redux/actions/loggedUser"

const PassengerPanel = ({ isLogged, fetchLogout }) => {
  const handleClick = () => {
    fetchLogout()
  }
  useEffect(() => {
    if (!isLogged.id) {
      navigate("/")
    }
  }, [])
  return (
    <Layout>
      <Panel user={isLogged} handleClick={handleClick} />
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
    fetchLogout: () => dispatch(fetchLogout()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PassengerPanel)
