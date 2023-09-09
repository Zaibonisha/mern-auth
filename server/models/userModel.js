const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  passwordHash: { type: String, required: true },
  username: { type: String, required: true }, // Add the username field
});

const User = mongoose.model("user", userSchema);

module.exports = User;