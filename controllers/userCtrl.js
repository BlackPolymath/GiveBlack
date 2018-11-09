const express = require("express");
const router = express.Router();
const give = require("../models/giveModel");
const org = require("../models/orgModel");
// is this needed?
const user = require("../models/userModel");

// test route
router.get("/", (req, res) => {
  res.send("this is a test route");
});

// Get login
router.get("/login", (req, res) => {
  res.render("login.hbs");
});
// Post login
router.post("/login", (req, res) => {
  user
    .create({
      emailuserName: req.body.emailuserName,
      password: req.body.password
    })
    .then(user => {
      res.redirect("/");
    });
});

// GET request/Sign Up => route is to signup.hbs
// router.get("/signup", (req, res) => {
//   res.render("signup.hbs");
// });

module.exports = router;
