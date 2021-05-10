const obj = {};
const { FlightNumber } = require("../models");
const S = require("sequelize");

obj.getAll = (req, res, next) => {
  FlightNumber.findAll().then((num) => {
    res.send(num);
  });
};

obj.getForName = (req, res, next) => {
  FlightNumber.findOne({
    where: {
      name: req.body.name,
    },
  })
    .then((data) => {
      if (data) {
        res.send(data);
      }
      res.send({ message: "El numero de vuelo no existe" });
    })
    .catch((err) => {
      next();
    });
};

obj.getAllForBaggage = (req, res, next) => {
  FlightNumber.findAll({
    where: {
      cantidad: S.literal("cantidad > 0"),
    },
  }).then((data) => {
    res.send(data);
  });
};

obj.updateStatus = (req, res, next) => {
  FlightNumber.update(
    {
      status: req.body.status,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  ).then((num) => {
    res.sendStatus(200);
  });
};

obj.create = (req, res, next) => {
  console.log(req.body);
  FlightNumber.create({ name: req.body.name })
    .then((num) => {
      res.send(num);
    })
    .catch((err) => {
      //message: err.errors[0].message
      res.send({ message: "El numero de vuelo ya existe" });
    });
};

module.exports = obj;
