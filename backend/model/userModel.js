const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
  },
  isEmailverified: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    enum: ["user", "merchant", "admin"],
    default: "user",
  },
});
module.exports = mongoose.model("User", userSchema);
