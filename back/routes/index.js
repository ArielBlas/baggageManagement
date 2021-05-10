const express = require("express");
const router = express.Router();

const users = require("./users");
const baggage = require("./baggage");
const flight_number_baggage = require("./flight_number_baggage");
const flight_number = require("./flight_number");

router.use("/users", users);
router.use("/baggage", baggage);
router.use("/flight_number", flight_number);
router.use("/flight_number_baggage", flight_number_baggage);

module.exports = router;
