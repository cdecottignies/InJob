const { auth, user, applicant } = require("../middleware");
const verifyToken = auth.verifyToken;
// const checkDataForAnonymousApply = applicant.checkDataForAnonymousApply;
const checkDuplicatePhoneOrEmail = user.checkDuplicatePhoneOrEmail
const createAnonymousUser = user.createAnonymousUser;
const applicantsController = require("../controllers/applicants.controller.js");

var router = require("express").Router();

// Apply to an Ad as a logged user
router.post("/", [ verifyToken ], applicantsController.apply);

// Apply to an Ad as an anonymous user
router.post("/anonymously", [ checkDuplicatePhoneOrEmail, createAnonymousUser ], applicantsController.applyAnonymously); 


module.exports = router;