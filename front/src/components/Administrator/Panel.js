import React from "react"
import { Link } from "gatsby"
import Person from "../../assets/images/panel/person.svg"

const Panel = ({ user, passengers, handleChange, handleClick }) => (
  <div className="container">
    <h2 className="bm-main-title">{"Panel de administrador"}</h2>
    <div className="row">
      <div className="col col-4">
        <div className="bm-admin-card">
          <div className="bm-admin-card-body">
            <div className="bm-admin-card-user">
              <img src={Person} alt={"person"} />
              <p>{user.name}</p>
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleClick}
              >
                {"Crear n° de vuelo"}
              </button>
              <Link to="/">{"cerrar sesión"}</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col col-8">
        <div className="bm-admin-row">
          <h4>{"Pasajeros"}</h4>

          <div className="bm-admin-row-list">
            {passengers.map(passenger => (
              <div className="bm-admin-row-link" key={passenger.id}>
                <div className="bm-admin-row-left">
                  <Link to={`/administrator/passenger/${passenger.id}`}>
                    {passenger.name}
                  </Link>
                  <span>
                    {"Nombre: " +
                      passenger.nickname +
                      " | " +
                      "Cantidad: " +
                      passenger.cantidad +
                      " | "}
                    <span>
                      {"Estado: "}
                      <select
                        onChange={event => handleChange(event, passenger.id)}
                      >
                        <option
                          value="pendiente"
                          selected={passenger.status === "pendiente"}
                        >
                          {"pendiente"}
                        </option>
                        <option
                          value="en progreso"
                          selected={passenger.status === "en progreso"}
                        >
                          {"en progreso"}
                        </option>
                        <option
                          value="completado"
                          selected={passenger.status === "completado"}
                        >
                          {"completado"}
                        </option>
                      </select>
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Panel
