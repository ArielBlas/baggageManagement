const express = require("express");
const router = express.Router();
const flight_number = require("../controllers/flight_number");
const users = require("../controllers/users");

router.get("/", flight_number.getAll);

router.post("/name", flight_number.getForName);

router.post("/baggage", users.isAdmin, flight_number.getAllForBaggage);

router.put("/status", users.isAdmin, flight_number.updateStatus);

router.post("/create", users.isAdmin, flight_number.create);

module.exports = router;
