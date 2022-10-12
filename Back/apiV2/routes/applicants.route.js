const { authJwt, anonymousUser} = require("../middleware");
const verifyToken = authJwt.verifyToken;
const createAnonymousUser = anonymousUser.createAnonymousUser;
const applicantsController = require("../controllers/applicants.controller.js");

var router = require("express").Router();

// Apply to an Ad as a logged user
router.post("/", [ verifyToken ], applicantsController.apply);

// Apply to an Ad as an anonymous user
router.post("/anonymously", [ createAnonymousUser ], applicantsController.applyAnonymously); 


module.exports = router;