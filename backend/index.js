require("dotenv").config();
const express = require("express");
const app = express();
var cors = require("cors");
app.use(cors());

const routes = require("./routes");
app.use(express.json());
app.use(routes);

app.listen(8000, () => {
  console.log("port conected");
});
