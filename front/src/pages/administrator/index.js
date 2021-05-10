import React, { useState } from "react"
import { navigate } from "gatsby"
import { connect } from "react-redux"
import { fetchLoginAdmin } from "../../redux/actions/loggedUser"
import Layout from "../../components/Layout"
import Administrator from "../../components/Administrator"

const IndexAdmintrator = ({ fetchLoginAdmin, isLogged }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleEmailInput = event => {
    setEmail(event.target.value)
  }
  const handlePassInput = event => {
    setPassword(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    fetchLoginAdmin(email, password).then(res => {
      if (res.isLogged) {
        return navigate("/administrator/panel")
      }
    })
  }

  return (
    <Layout>
      <Administrator
        handleEmailInput={handleEmailInput}
        handlePassInput={handlePassInput}
        handleSubmit={handleSubmit}
        email={email}
        password={password}
        user={isLogged}
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
    fetchLoginAdmin: (email, password) =>
      dispatch(fetchLoginAdmin(email, password)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexAdmintrator)
