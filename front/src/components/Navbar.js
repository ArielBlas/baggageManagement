import React from "react"
import { Link } from "gatsby"

const Navbar = () => (
  <nav className="navbar navbar-light bm-navbar">
    <div className="container-fluid">
      <Link to="/" className="navbar-brand">
        {"BaggageManagement"}
      </Link>
    </div>
  </nav>
)

export default Navbar
