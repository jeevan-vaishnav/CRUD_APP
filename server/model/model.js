const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  gender: String,
  status: String,
});

const Userdb = mongoose.model("userdb", userSchema);

module.exports = Userdb;
