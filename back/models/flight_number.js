const S = require("sequelize");
const db = require("../config/db");

class FlightNumber extends S.Model {}
FlightNumber.init(
  {
    nickname: {
      type: S.STRING,
    },
    name: {
      type: S.STRING,
      allowNull: false,
      unique: true,
    },
    cantidad: {
      type: S.INTEGER,
      defaultValue: 0,
    },
    status: {
      type: S.STRING,
      defaultValue: "pendiente",
    },
  },
  { sequelize: db, modelName: "flight_number" }
);

module.exports = FlightNumber;
