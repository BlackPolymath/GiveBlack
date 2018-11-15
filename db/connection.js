const mongoose = require("mongoose");
// mongoose.connect(
//   "mongodb://localhost/giveblack",
//   { useNewUrlParser: true }
// );

if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.MLAB_URL);
} else {
  mongoose.connect(
    "mongodb://localhost/giveblack",
    { useNewUrlParser: true }
  );
}

mongoose.Promise = Promise;

module.exports = mongoose;

// heroku config:set MLAB_URL=mongodb://giveblack:abc123@ds161856.mlab.com:61856/giveblack

// mongodb://<dbuser>:<dbpassword>@ds161856.mlab.com:61856/giveblack
