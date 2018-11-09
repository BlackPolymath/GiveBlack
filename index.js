var express = require("express");
const parser = require("body-parser");
const methodOverride = require("method-override");
const userCtrl = require("./controllers/userCtrl");
var app = express();

app.use(methodOverride("_method"));
app.use(parser.urlencoded({ extended: true }));
app.set("view engine", "hbs");

app.use("/", userCtrl);

app.listen(2000, () => {
  console.log("app listening on port 2000");
});
