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
router.post("/login", (req, res, err) => {
  UserModel.findOne({
    email: req.body.email
  })
    .then(user => {
      res.redirect("/dashboard/" + user.id);
    })
    .catch(err => {
      res.render("index", {
        message: "Account does not exist, please SignUp!"
      });
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
    res.redirect("/profile/" + user.id);
  });
});

// get request to delete account
router.get("/delete/:id", (req, res) => {
  UserModel.findOneAndRemove({ _id: req.params.id }).then(() => {
    res.redirect("/");
  });
});

// get request to delete org
router.get("/delete/:id", (req, res) => {
  orgModel.findOneAndRemove({ _id: req.params.id }).then(() => {
    res.redirect("dashboard");
  });
});

// Get request for user dashboard & orgModel
router.get("/dashboard/:id", (req, res) => {
  org.find({ creator: req.params.id }).then(entity => {
    res.render("dashboard", { userId: req.params.id, org: entity });
  });
});

// Flash msg to confirm donation
router.get("/give/:userId/:orgId", (req, res) => {
  UserModel.findOne({ _id: req.params.userId }).then(user => {
    org.find({ creator: user.id }).then(entity => {
      res.render("dashboard", {
        message: "Thanks for Giving!",
        userId: req.params.userId,
        org: entity
      });
    });
  });
});

// GET request for new Org Form
router.get("/new/:id", (req, res) => {
  res.render("new", { userId: req.params.id });
});

// POST req for new org added to db
router.post("/new/:id", (req, res) => {
  org
    .create({
      name: req.body.name,
      mission: req.body.mission,
      creator: req.params.id,
      url: req.body.url
    })
    .then(entity => {
      UserModel.findOne({ _id: req.params.id }).then(user => {
        user.orgs.push(entity);
        user.save(err => {
          res.redirect("/dashboard/" + user.id);
        });
      });
    });
});

// create: (req, res) => {
//   Tweet.create({
//     content: req.body.tweet.content,
//     author: req.body.author
//   }).then(tweet => {
//     User.findOne({ _id: req.body.author }).then(user => {
//       user.tweets.push(tweet);
//       user.save(err => {
//         res.redirect(`/tweet/${tweet._id}`);
//       });
//     });
//   });
// },
module.exports = router;
