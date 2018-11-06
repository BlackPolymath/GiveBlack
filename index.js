var express = require("express");
const parser = require("body-parser");
const methodOverride = require("method-override");

var app = express();

app.use(methodOverride("_method"));
app.use(parser.urlencoded({ extended: true }));
app.set("view engine", "hbs");

app.get("/", function(req, res) {
  res.send("Give Black");
});
app.listen(2000, () => {
  console.log("app listening on port 2000");
});
