const express = require("express");
const secureApi = require("../../middleware/secureApi");
const registrationContoller = require("../../controllers/registrationContoller");
const otpverificationController = require("../../controllers/otpverificationController");
const _ = express.Router();

_.post("/registration", secureApi, registrationContoller);
_.post("/otpverification", otpverificationController);

module.exports = _;
