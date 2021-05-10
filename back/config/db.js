const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/baggage-management", {
  logging: false,
  dialect: "postgres",
});

module.exports = db;
