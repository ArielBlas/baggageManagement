import React from "react"

const Passenger = ({
  handleFlightInput,
  handleSubmit,
  flight_number,
  message,
  admin,
}) => (
  <form className="container" onSubmit={handleSubmit}>
    <h2 className="bm-main-title">
      {admin
        ? "Crear número de vuelo"
        : "Ingrese el numero de vuelo para ver su equipaje"}
    </h2>
    <div className="bm-form-card">
      <div className="mb-3">
        <label htmlFor="flight_number" className="form-label">
          {"Número de vuelo"}
        </label>
        <input
          className="form-control form-control-lg"
          type="text"
          id="flight_number"
          onChange={handleFlightInput}
          value={flight_number}
        />
      </div>
      {message && <div>{message}</div>}
      <button type="submit" className="btn btn-danger bm-form-button">
        {admin ? "Crear" : "Entrar"}
      </button>
    </div>
  </form>
)

export default Passenger
