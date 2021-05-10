import React, { useEffect } from "react"
import { navigate } from "gatsby"
import { connect } from "react-redux"
import { fetchAllPassengerBaggage } from "../../redux/actions/passenger"
import { fetchUpdateStatus } from "../../redux/actions/baggage"
import Layout from "../../components/Layout"
import Panel from "../../components/Administrator/Panel"

const AdministratorPanel = ({
  isLogged,
  passengers,
  fetchAllPassengerBaggage,
  fetchUpdateStatus,
}) => {
  useEffect(() => {
    if (isLogged.id) {
      return fetchAllPassengerBaggage(isLogged)
    } else {
      return navigate("/")
    }
  }, [])

  const handleChange = (event, id) => {
    fetchUpdateStatus(event.target.value, id, isLogged)
  }

  const handleClick = () => {
    return navigate("/administrator/flight-number/create")
  }

  return (
    <Layout>
      <Panel
        user={isLogged}
        passengers={passengers}
        handleChange={handleChange}
        handleClick={handleClick}
      />
    </Layout>
  )
}

const mapStateToProps = state => {
  return {
    isLogged: state.loggedUserReducer.isLogged,
    passengers: state.passengerReducer.passengers,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllPassengerBaggage: user => dispatch(fetchAllPassengerBaggage(user)),
    fetchUpdateStatus: (status, id, user) =>
      dispatch(fetchUpdateStatus(status, id, user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdministratorPanel)
