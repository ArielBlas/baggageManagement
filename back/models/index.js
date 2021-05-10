const Users = require("./users");
const Baggage = require("./baggage");
const FlightNumberBaggage = require("./flight_number_baggage");
const FlightNumber = require("./flight_number");

FlightNumberBaggage.belongsTo(Baggage, { as: "baggage" });
FlightNumberBaggage.belongsTo(FlightNumber, { as: "flight_number" });
//FlightNumber.belongsTo(Users, { as: "user" });

module.exports = {
  Users,
  Baggage,
  FlightNumberBaggage,
  FlightNumber,
};
