// const User = require("../model/userModel");

// const bcrypt = require("bcrypt");

// // RegController Work start
// let loginController = async (req, res) => {
//   const { email, password } = req.body;
//   let findEmail = await User.findOne({ email: email });
//   if (findEmail) {
//     bcrypt.compare(password, findEmail.password, function (err, result) {
//       // result == true
//       console.log(result);
//       if (result) {
//         res.send({
//           username: findEmail.username,
//           email: findEmail.email,
//           role: findEmail.role,
//         });
//       } else {
//         res.send({ error: "Credential Invalid" });
//       }
//     });
//   }
// };
// module.exports = loginController;
const User = require("../model/userModel");
const bcrypt = require("bcrypt");

let loginController = async (req, res) => {
  const { email, password } = req.body;

  let existingEmail = await User.find({ email: email });

  if (existingEmail.length > 0) {
    console.log(existingEmail[0].password);
    bcrypt.compare(password, existingEmail[0].password, function (err, result) {
      // result == true
      console.log(result);

      if (result) {
        res.send({
          id: existingEmail[0]._id,
          username: existingEmail[0].username,
          email: existingEmail[0].email,
          role: existingEmail[0].role,
          isEmailverified: existingEmail[0].isEmailverified,
        });
      } else {
        res.send({
          error: "Credential Invalid",
        });
      }
    });
  } else {
    res.send({ error: `${email} not exists` });
  }
};

module.exports = loginController;
