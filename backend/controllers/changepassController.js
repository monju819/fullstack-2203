const User = require("../model/userModel");
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// RegController Work start
let changepassController = async (req, res) => {
  const { token, password } = req.body;
  var decoded = jwt.verify(token, "shhhhh");
  console.log(decoded.email);

  bcrypt.hash(password, 10, async function (err, hash) {
    await User.findOneAndUpdate({ email: decoded.email }, { password: hash });
    res.send({ success: "password Change" });
  });
};

module.exports = changepassController;
