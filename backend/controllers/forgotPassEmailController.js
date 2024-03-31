const User = require("../model/userModel");
var jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

// RegController Work start
let forgotPassEmailController = async (req, res) => {
  const { email } = req.body;
  let findEmail = await User.findOne({ email: email });
  if (findEmail) {
    var token = jwt.sign({ email: email }, "shhhhh");
    console.log(token);

    // email send code nodemaile theke copy kore ana code
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
      subject: "password change email",
      html: `<a  href="http://localhost:5173/changepass/${token}">click here verify your email </a>`,
    });
  }
};
module.exports = forgotPassEmailController;
