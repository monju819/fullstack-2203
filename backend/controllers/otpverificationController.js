const blankInput = require("../helpers/blankinput");
const emailValidator = require("../helpers/emailValidator");
const User = require("../model/userModel");
const secretValidator = require("../helpers/secrectValidator");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

// RegController Work start
let otpverificationController = async (req, res) => {
  const { email, otp } = req.body;
  let findEmail = await User.findOne({ email: email });
  if (findEmail) {
    if (findEmail.otp == otp) {
      console.log("milse");
      await User.findOneAndUpdate({ email: email }, { otp: "" });
      res.send({ success: "otp matched" });
    } else {
      console.log("mile nai");
      res.send({ error: "otp not matched" });
    }
  }
};
module.exports = otpverificationController;
