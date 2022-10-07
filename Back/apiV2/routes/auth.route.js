const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");

var router = require("express").Router();

// je ne vois pas bien ce que cela fait 
// module.exports = function(app) {
//   app.use(function(req, res, next) {
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, Content-Type, Accept"
//     );
//     next();
//   });


// Signup a new user
router.post("/signup",
  [
    verifySignUp.checkDuplicateUsernameOrEmail,
  //   verifySignUp.checkRolesExisted
  ],
  controller.signup
);

// Signin a user
router.post("/api/auth/signin", controller.signin);

// Signout a user
router.post("/api/auth/signout", controller.signout);


module.exports = router;
