import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const Error404 = () => {
  return (
    <Layout>
      <div className="container">
        <h2 className="bm-main-title">{"Error 404"}</h2>
        <Link to="/">{"Home"}</Link>
      </div>
    </Layout>
  )
}

export default Error404
