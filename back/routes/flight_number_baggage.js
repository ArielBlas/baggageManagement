const express = require("express");
const router = express.Router();
const flight_number_baggage = require("../controllers/flight_number_baggage");
const users = require("../controllers/users");

router.get("/", flight_number_baggage.getAll);

router.post(
  "/flight_number",
  users.isAdmin,
  flight_number_baggage.getForFlightNumberId
);

router.post("/create", flight_number_baggage.create);

module.exports = router;
