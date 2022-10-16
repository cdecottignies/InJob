const user = require("../middleware").user;
const controller = require("../controllers/auth.controller");

var router = require("express").Router();


// Signup a new user
router.post("/signup",
  [
    user.checkDuplicatePhoneOrEmail,
  //   verifySignUp.checkRolesExisted
  ],
  controller.signup
);

// Signin a user
router.post("/signin", controller.signin);

// Signout a user
router.post("/signout", controller.signout);


module.exports = router;
