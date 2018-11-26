// correct route to db?
const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

// should i be requiring the user here?
const OrgSchema = new mongoose.Schema({
  name: String,
  mission: String,
  url: String,
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }

  // do i need to ref: user here?
});

module.exports = mongoose.model("Org", OrgSchema);
