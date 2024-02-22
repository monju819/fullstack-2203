require("dotenv").config();
const express = require("express");
const app = express();
const mongoConfig = require("./config/mongoConfig");
var cors = require("cors");
app.use(cors());
mongoConfig();
const routes = require("./routes");
app.use(express.json());
app.use(routes);

app.listen(8000, () => {
  console.log("port conected");
});
