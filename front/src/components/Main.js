import React from "react"
import { Link } from "gatsby"
import { cardsMain } from "./cardsMain"

const Main = ({ handleClick }) => (
  <div className="container">
    <h2 className="bm-main-title">{"Seleccione lo que quiere hacer"}</h2>
    <div className="row">
      {cardsMain.map(card => (
        <div className="col" key={card.type}>
          <Link to={"/" + card.type} className="bm-card-link">
            <div className="card bm-card">
              <img src={card.img} className="card-img-top" alt={card.type} />
              <div className="card-body">
                <h4 className="bm-card-title card-title">{card.title}</h4>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
)

export default Main
