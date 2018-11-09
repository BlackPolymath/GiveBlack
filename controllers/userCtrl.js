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

// GET request/Sign Up => route is to signup.hbs
router.get("/signup", (req, res) => {
  res.render("signup");
});

// GET request for for, to login & verify authentication
module.exports = router;
