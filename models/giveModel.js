// correct route to db?
const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const GiveSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
    // ref means reference another model. In this case it's called User
  },
  org: {
    type: Schema.Types.ObjectId,
    ref: "Org"
    // ref means reference another model. In this case it's called Org
  },
  amount: String
});
module.exports = mongoose.model("Give", GiveSchema);
