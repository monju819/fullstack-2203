const blankInput = require("../helpers/blankinput");
const emailValidator = require("../helpers/emailValidator");
const User = require("../model/userModel");
const secretValidator = require("../helpers/secrectValidator");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

// RegController Work start
let registrationContoller = async (req, res) => {
  const { username, email, password } = req.body;
  console.log(username, email, password);
  if (blankInput(username)) {
    res.send({ error: "username required" });
  } else if (blankInput(email)) {
    res.send({ error: "email required" });
  } else if (!emailValidator) {
    res.send({ error: "valid  email required" });
  } else if (blankInput(password)) {
    res.send({ error: "password required" });
  } else if (secretValidator(password)) {
    res.send({ error: "password is sort" });
  } else {
    let existingEmail = await User.find({ email: email });
    console.log(existingEmail);
    if (existingEmail.length > 0) {
      res.send({ error: `${email} already exists` });
    } else {
      // otp-genarate working
      const otp = otpGenerator.generate(6, {
        lowerCaseAlphabets: false,
        upperCaseAlphabets: false,
        specialChars: false,
      });
      console.log(otp);
      bcrypt.hash(password, 10, async function (err, hash) {
        let user = new User({
          email: email,
          username: username,
          password: hash,
          otp: otp,
        });

        user.save();

        // nodemail theke ana copy kora code
        const transporter = nodemailer.createTransport({
          service: "gmail",
          secure: false,
          auth: {
            user: "sajidhasan819@gmail.com",
            pass: "gwvi catx wvhl zags",
          },
        });
        const info = await transporter.sendMail({
          from: "sajidhasan819@gmail.com",
          to: email,
          subject: "Email verification OTP",
          html: `<a  href="http://localhost:5173/otpvirification/${email}/${otp}">click here verify your email </a>`,
        });
        res.send({
          username: user.username,
          email: user.email,
          role: user.role,
        });
      });
    }
  }
};
module.exports = registrationContoller;
