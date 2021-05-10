const express = require("express");
const volleyball = require("volleyball");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const db = require("./config/db");
const port = 3200;
const routes = require("./routes");

app.use(volleyball);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200,
  })
);

app.use("/api", routes);

db.sync({ force: false })
  .then(() => {
    app.listen(port, () => {
      console.log(`Escuchando en el puerto ${port}`);
    });
  })
  .catch((err) => {
    console.error("Problema en el servidor");
    console.error(err);
  });
