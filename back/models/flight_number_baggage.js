const S = require("sequelize");
const db = require("../config/db");

class FlightNumbersBaggage extends S.Model {}
FlightNumbersBaggage.init(
  {
    id: {
      type: S.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    flightNumberId: {
      type: S.INTEGER,
      allowNull: false,
    },
    baggageId: {
      type: S.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "flight_number_baggage" }
);

module.exports = FlightNumbersBaggage;
