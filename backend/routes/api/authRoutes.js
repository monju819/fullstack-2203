const express = require("express");
const secureApi = require("../../middleware/secureApi");
const registrationContoller = require("../../controllers/registrationContoller");
const _ = express.Router();

_.post("/registration", secureApi, registrationContoller);

module.exports = _;
