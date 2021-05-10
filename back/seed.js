const { Baggage, Users, FlightNumber } = require("./models");

const baggages = [
  { name: "grandes" },
  { name: "pequeños" },
  { name: "prendas" },
];

const users = [
  {
    name: "admin",
    email: "admin@admin.com",
    password: "admin",
    rol: "1",
  },
];

const flight_numbers = [
  {
    name: "air00",
  },
  {
    name: "air01",
  },
  {
    name: "air02",
  },
  {
    name: "air03",
  },
  {
    name: "air04",
  },
];

Baggage.bulkCreate(baggages).then(() => {
  console.log("Baggage create in database");
  process.exit();
});

Users.bulkCreate(users).then(() => {
  console.log("Users create in database");
  process.exit();
});

FlightNumber.bulkCreate(flight_numbers).then(() => {
  console.log("Flight Numbers create in database");
  process.exit();
});
