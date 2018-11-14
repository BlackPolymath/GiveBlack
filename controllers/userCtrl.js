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
    // will redirect to user dashboard, use user id
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
    // will redirect to user dashboard, use user id
    res.redirect("/profile/" + user.id);
  });
});

// querying db for user once logged in
router.get("/profile/:id", (req, res) => {
  UserModel.findOne({ _id: req.params.id }).then(user => {
    res.render("updateprofile", user);
    // res.render("updateprofile" + user.id, user);
  });
});

// update user in db using form
router.put("/update/:id", (req, res) => {
  req.body.complete = req.body.complete ? true : false;
  UserModel.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true
  }).then(user => {
    res.redirect("/profile/:id" + user.id);
  });
});

// get request to delete account
router.get("/delete/:id", (req, res) => {
  UserModel.findOne({ _id: req.params.id }).then(user => {
    res.render("deleteprofile", user);
    // res.render("updateprofile" + user.id, user);
  });
});

// delete account
router.delete("/delete/:id", (req, res) => {
  UserModel.findOneAndRemove({ _id: req.params.id }).then(() => {
    res.redirect("/");
  });
});
// update UserModel in database

module.exports = router;
