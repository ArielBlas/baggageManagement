import React from "react"
import Layout from "../components/Layout"
import Main from "../components/Main"

const Home = ({ client, location }) => {
  const handleClick = type => {
    client(type)
  }

  return (
    <Layout path={location.pathname}>
      <Main handleClick={handleClick} />
    </Layout>
  )
}

export default Home
