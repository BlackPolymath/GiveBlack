// correct route to db?
const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

// should i be requiring the user here?
// what else can i include here for payment type?
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
  amount: Number
});
module.exports = mongoose.model("Give", GiveSchema);
