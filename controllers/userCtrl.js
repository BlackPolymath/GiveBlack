const express = require("express");
const router = express.Router();
const give = require("../models/giveModel");
const org = require("../models/orgModel");
const UserModel = require("../models/userModel");

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
    res.redirect("/dashboard/" + user.id);
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
    // need catch err to say need to sign up, currently times out
    res.redirect("/dashboard/" + user.id);
  });
});

// querying db for user once logged in
router.get("/profile/:id", (req, res) => {
  UserModel.findOne({ _id: req.params.id }).then(user => {
    res.render("updateprofile", user);
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
  UserModel.findOneAndRemove({ _id: req.params.id }).then(() => {
    res.redirect("/");
  });
});

// Get request for user dashboard
router.get("/dashboard/:id", (req, res) => {
  org.find().then(entity => {
    res.render("dashboard", { userId: req.params.id, org: entity });
  });
});

// Flash msg to confirm donation
router.get("/give/:userId/:orgId", (req, res) => {
  org.find().then(entity => {
    res.render("dashboard", {
      message: "Thanks for Giving!",
      userId: req.params.userId,
      org: entity
    });
  });
});
module.exports = router;
