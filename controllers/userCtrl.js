const express = require("express");
const router = express.Router();
const give = require("../models/giveModel");
const org = require("../models/orgModel");
// is this needed?
const UserModel = require("../models/userModel");
//change the model to UserModelModel
//change all references relating to queries to UserModelModel

// homepage
router.get("/", (req, res) => {
  res.render("index");
});

// Get SignUp/create User
router.get("/signup", (req, res) => {
  res.render("signup");
});

// Post SignUp/ create User
router.post("/signup", (req, res) => {
  UserModel.create({
    firstName: req.body.firstName,
    lastName: req.body.lastname,
    email: req.body.email,
    password: req.body.password
  }).then(user => {
    res.redirect("/");
  });
});

// GET Login/ existing user
router.get("/login", (req, res) => {
  res.render("login");
});

// Post Login/ existing user
router.post("/login", (req, res) => {
  UserModel.findOne({
    email: req.body.email
  }).then(user => {
    // res.redirect("/");
    res.redirect("/profile/" + user.id);
  });
});

// Get specific user profile after log In
router.get("/profile/:id", (req, res) => {
  UserModel.findOne({ _id: req.params.id }).then(user => {
    res.render("profile", user);
  });
  //use findone again to get user specific data
  //consider where the user id comes in  and use the user id in the find one
  //when you get the users data pass it to the view for profile
  //work in the profile view to render that data
});

// Get sign up form
router.get("/signup", (req, res) => {
  res.render("signup");
});

// Post profile form
router.post("/profile/:id", (req, res) => {
  UserModel.create({
    firstName: req.body.firstName,
    lastName: req.body.lastname,
    email: req.body.email,
    password: req.body.password
  }).then(user => {
    res.redirect("/");
  });
});

// update UserModel in database

// router.patch("/profile/:id", (req, res) => {
// UserModel.findOneAndUpdate({ _id: req.params.id }

// });

module.exports = router;
