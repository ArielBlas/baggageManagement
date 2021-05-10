const S = require("sequelize");
const db = require("../config/db");

class Users extends S.Model {}
Users.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
    },
    email: {
      type: S.STRING,
      unique: true,
    },
    password: {
      type: S.STRING,
    },
    rol: {
      type: S.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "user" }
);

module.exports = Users;
