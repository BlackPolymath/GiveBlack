// correct route to db?
const mongoose = require("../db/connection");

// should i be requiring the user here?
const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  authenticated: Boolean,
  password: String
});

module.exports = mongoose.model("User", UserSchema);
