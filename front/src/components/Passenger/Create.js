import React from "react"

const Create = ({
  handleNameInput,
  handleFlightInput,
  handleSubmit,
  flight_number,
  name,
  baggage,
  message,
}) => (
  <form className="container" onSubmit={handleSubmit}>
    <div className="bm-invoice bm-panel-card-info">
      <table>
        <thead>
          <tr>
            {Object.keys(baggage).map((a, idx) => (
              <th key={idx}>{a}</th>
            ))}
          </tr>
        </thead>
        <tfoot>
          <tr>
            {Object.keys(baggage).map((a, idx) => (
              <th key={idx}>{baggage[a]}</th>
            ))}
          </tr>
        </tfoot>
      </table>
    </div>
    <div className="bm-form-card">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          {"Nombre"}
        </label>
        <input
          className="form-control form-control-lg"
          type="text"
          id="name"
          onChange={handleNameInput}
          value={name}
        />
      </div>
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
        Crear
      </button>
    </div>
  </form>
)

export default Create
