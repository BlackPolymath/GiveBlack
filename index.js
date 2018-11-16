var express = require("express");
const parser = require("body-parser");
const methodOverride = require("method-override");
const userCtrl = require("./controllers/userCtrl");
var app = express();

const flash = require("connect-flash");
app.use(flash());

app.use(methodOverride("_method"));
app.use(parser.urlencoded({ extended: true }));
app.set("view engine", "hbs");

app.use("/", userCtrl);
app.use("/imgs", express.static("public"));

app.listen(2000, () => {
  console.log("app listening on port 2000");
});

// app.set("port", process.env.PORT || 3001);

// app.listen(app.get("port"), () => {
//   console.log(`✅ PORT: ${app.get("port")} 🌟`);
// });
