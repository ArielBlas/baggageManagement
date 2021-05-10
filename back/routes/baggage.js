const express = require("express");
const router = express.Router();
const baggage = require("../controllers/baggage");

router.get("/", baggage.getAll);

router.post("/create", baggage.create);

module.exports = router;
