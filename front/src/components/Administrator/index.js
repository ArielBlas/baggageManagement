import React from "react"

const Administrator = ({
  handleEmailInput,
  handlePassInput,
  handleSubmit,
  email,
  password,
  user,
}) => (
  <form className="container" onSubmit={handleSubmit}>
    <h2 className="bm-main-title">
      {"Ingrese su cuenta para usar el administrador"}
    </h2>
    <div className="bm-form-card">
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          {"Email"}
        </label>
        <input
          type="email"
          className="form-control form-control-lg"
          id="email"
          onChange={handleEmailInput}
          value={email}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          {"Contraseña"}
        </label>
        <input
          type="password"
          className="form-control form-control-lg"
          id="password"
          onChange={handlePassInput}
          value={password}
        />
      </div>
      <button type="submit" className="btn btn-danger bm-form-button">
        Entrar
      </button>
    </div>
  </form>
)

export default Administrator
