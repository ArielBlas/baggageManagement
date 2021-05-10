const obj = {};
const { FlightNumberBaggage, FlightNumber, Baggage } = require("../models");
const S = require("sequelize");

obj.getAll = (req, res, next) => {
  FlightNumberBaggage.findAll().then((user) => {
    res.send(user);
  });
};

obj.getForFlightNumberId = (req, res, next) => {
  const baggages = [];
  FlightNumber.findOne({
    where: { id: req.body.passenger },
  }).then((data) => {
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
  });
};

obj.create = async (req, res, next) => {
  const arr = [];
  const arrBags = [];
  const baggage = req.body.baggageId;
  const flightNumberId = req.body.flightNumberId;
  let bags = Object.keys(baggage);

  for (let bag of bags)
    await Baggage.findOne({
      where: {
        name: bag,
      },
    }).then((data) => {
      if (baggage[bag] > 0)
        arr.push({ baggageId: data.id, cantidad: baggage[bag] });
    });

  for (let bag of arr) {
    for (let x = 0; x < bag.cantidad; x++) {
      arrBags.push({ baggageId: bag.baggageId, flightNumberId });
    }
  }

  FlightNumber.findOne({
    where: {
      id: req.body.flightNumberId,
    },
  }).then((data) => {
    if (data.cantidad == 0) {
      data
        .update({
          cantidad: arrBags.length,
          nickname: req.body.nickName,
          status: "en progreso",
        })
        .then(() => {
          FlightNumberBaggage.bulkCreate(arrBags)
            .then((data) => {
              res.send(data);
            })
            .catch((err) => {
              console.log(err);
              res.send(err);
            });
        });
    } else {
      res.send({ message: "El pasajero ya se creó un equipaje" });
    }
  });
};

module.exports = obj;
