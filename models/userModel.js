// correct route to db?
const mongoose = require("../db/connection");

// should i be requiring the user here?
const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phoneNumber: Number,
  email: String,
  authenticated: Boolean,
  interests: Array,
  password: String
});

module.exports = mongoose.model("User", UserSchema);
