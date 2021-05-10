const S = require("sequelize");
const db = require("../config/db");

class Baggage extends S.Model {}
Baggage.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "baggage" }
);

module.exports = Baggage;
