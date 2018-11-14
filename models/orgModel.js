// correct route to db?
const mongoose = require("../db/connection");

// should i be requiring the user here?
const OrgSchema = new mongoose.Schema({
  org: {
    name: String,
    mission: String,
    url: String
  }

  // do i need to ref: user here?
});

module.exports = mongoose.model("Org", OrgSchema);
