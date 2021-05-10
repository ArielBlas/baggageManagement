import React from "react"
import { Link } from "gatsby"
import Person from "../../assets/images/panel/person.svg"

const Panel = ({ user, handleClick, admin }) => (
  <div className="container">
    <h2 className="bm-main-title">
      {admin ? "Pasajero" : "Panel de pasajero"}
    </h2>
    <div className="bm-panel-card">
      <div className="bm-panel-card-header">{user.name}</div>
      <div className="bm-panel-card-body">
        <div className="bm-panel-card-user">
          <img src={Person} alt={"person"} />
          <p>{user.nickname}</p>
          {admin ? null : (
            <Link to="/" onClick={handleClick}>
              {"cerrar sesión"}
            </Link>
          )}
        </div>
        <div className="bm-panel-card-info">
          <h4>{"Equipaje"}</h4>
          {user.baggages && (
            <table>
              <thead>
                <tr>
                  {user.baggages.map((bag, idx) => (
                    <th key={idx}>{bag.name}</th>
                  ))}
                </tr>
              </thead>
              <tfoot>
                <tr>
                  {user.baggages.map((bag, idx) => (
                    <td key={idx}>{bag.cantidad}</td>
                  ))}
                </tr>
              </tfoot>
            </table>
          )}
          <h4>{"Estado"}</h4>
          <p>{user.status}</p>
        </div>
      </div>
    </div>
  </div>
)

export default Panel
