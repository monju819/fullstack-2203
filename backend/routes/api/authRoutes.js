const express = require("express");
const secureApi = require("../../middleware/secureApi");
const registrationContoller = require("../../controllers/registrationContoller");
const otpverificationController = require("../../controllers/otpverificationController");
const forgotPassEmailController = require("../../controllers/forgotPassEmailController");
const changepassController = require("../../controllers/changepassController");
const loginController = require("../../controllers/loginController");
const _ = express.Router();

_.post("/registration", secureApi, registrationContoller);
_.post("/login", secureApi, loginController);
_.post("/otpverification", otpverificationController);
_.post("/forgotpassemail", forgotPassEmailController);
_.post("/changepass", changepassController);

module.exports = _;
