const express = require("express");
const app = express();
require("dotenv").config();
const api = require("./routes");
const cors = require("cors");

const port = process.env.DB_PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", api);

app.listen(port, (err) => {
  if (err) {
    throw new Error("Something bad happened");
  }
  console.log(`Server listening on port ${port}`);
});