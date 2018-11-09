// correct route to db?
const mongoose = require("../db/connection");

// should i be requiring the user here?
// what else can i include here for payment type?
const GiveSchema = new mongoose.Schema({
  typeOfPayment: String,
  user: String, // ref
  fund: String, // ref
  amount: Number
});

module.exports = mongoose.model("Give", GiveSchema);
