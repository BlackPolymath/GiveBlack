// correct route to db?
const mongoose = require("../db/connection");

// should i be requiring the user here?
const FundSchema = new mongoose.Schema({
  name: String,
  description: String
  // how to/do i need to ref user here?
  // ref: "User" ??
});

module.exports = mongoose.model("Fund", FundSchema);
