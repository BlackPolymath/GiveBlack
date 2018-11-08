const mongoose = require("mongoose");
// not sure if this is needed. what is tweeter?
mongoose.connect("mongodb://localhost/giveblack");
mongoose.Promise = Promise;
module.exports = mongoose;
