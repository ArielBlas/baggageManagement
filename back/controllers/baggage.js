const obj = {};
const { Baggage } = require("../models");

obj.getAll = (req, res, next) => {
  Baggage.findAll().then((user) => {
    res.send(user);
  });
};

obj.create = (req, res, next) => {
  Baggage.create(req.body).then((user) => {
    res.sendStatus(200);
  });
};

module.exports = obj;
