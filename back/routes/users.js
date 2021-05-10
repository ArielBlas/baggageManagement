const express = require("express");
const router = express.Router();
const users = require("../controllers/users");

router.get("/", users.getAll);

router.post("/register", users.register);

router.post("/login", users.login);

router.post("/passenger", users.passanger);

module.exports = router;
