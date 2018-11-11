const express = require("express");
const router = express.Router();
const give = require("../models/giveModel");
const org = require("../models/orgModel");
// is this needed?
const user = require("../models/userModel");

// homepage
router.get("/", (req, res) => {
  res.render("index");
});

// Get SignUp/create user
router.get("/signup", (req, res) => {
  res.render("signup.hbs");
});
// Post SignUp/ create user
router.post("/signup", (req, res) => {
  user
    .create({
      emailuserName: req.body.emailuserName,
      password: req.body.password
    })
    .then(user => {
      res.redirect("/");
    });
});
// GET Login
router.get("/login", (req, res) => {
  res.render("login");
});
// Post Login
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
// GET logout
module.exports = router;
