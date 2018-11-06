// correct route to db?
const mongoose = require("../db/connection");

// should i be requiring the user here?
OrgSchema = new mongoose.Schema({
    name: String,
    mission: String,
    fund: String,
    // what schema type ould i have to use for url?
    url: 
    // do i need to ref: user here?
  });
  
  module.exports = mongoose.model("Org", Org);
  