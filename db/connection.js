const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost/giveblack",
  { useNewUrlParser: true }
);
mongoose.Promise = Promise;

module.exports = mongoose;
