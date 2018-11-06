// correct route to db?
const mongoose = require("../db/connection");

// should i be requiring the user here?
userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phoneNumber: Number,
  emailUserName: String,
  authenticated: Boolean,
  interests: Array,
  password: String
});
