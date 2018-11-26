// correct route to db?
const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

// should i be requiring the user here?
const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  authenticated: Boolean,
  password: String,
  orgs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Org"
    }
  ]
});

module.exports = mongoose.model("User", UserSchema);
