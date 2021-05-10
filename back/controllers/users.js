const obj = {};
const {
  Users,
  FlightNumber,
  FlightNumberBaggage,
  Baggage,
} = require("../models");

obj.getAll = (req, res, next) => {
  Users.findAll().then((user) => {
    res.send(user);
  });
};

obj.isAdmin = (req, res, next) => {
  if (req.body.user && req.body.user.rol === 1) {
    next();
  } else {
    res.sendStatus(401);
  }
};

obj.register = (req, res, next) => {
  Users.create(req.body).then((user) => {
    res.sendStatus(200);
  });
};

obj.login = (req, res, next) => {
  Users.findOne({
    where: { email: req.body.email, password: req.body.password },
  }).then((user) => res.send(user));
};

obj.passanger = async (req, res, next) => {
  const baggages = [];
  FlightNumber.findOne({
    where: { name: req.body.flight_number },
  }).then((data) => {
    if (data) {
      FlightNumberBaggage.findAll({
        where: {
          flightNumberId: data.id,
        },
        include: [
          {
            model: Baggage,
            as: "baggage",
          },
        ],
      }).then(async (flight_number_baggage) => {
        await Baggage.findAll().then((data) => {
          for (let bag of data) {
            baggages.push({
              name: bag.name,
              cantidad: flight_number_baggage
                .map((a) => (a.baggageId == bag.id ? 1 : 0))
                .reduce((a, b) => a + b, 0),
            });
          }
        });

        res.send({ ...data.dataValues, baggages });
      });
    } else {
      res.send({ message: "El numero de vuelo no existe" });
    }
  });
};

module.exports = obj;
