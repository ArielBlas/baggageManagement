import React from "react"
import Navbar from "./Navbar"

import "../assets/styles/main.scss"
import "bootstrap/dist/css/bootstrap.min.css"

const Layout = ({ children }) => (
  <div>
    <Navbar />
    {children}
  </div>
)

export default Layout
