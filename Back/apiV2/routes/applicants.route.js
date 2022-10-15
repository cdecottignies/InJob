const { auth, user, applicant } = require("../middleware");
const verifyToken = auth.verifyToken;
const isAdmin = auth.isAdmin;
// const checkDataForAnonymousApply = applicant.checkDataForAnonymousApply;
const checkDuplicatePhoneOrEmail = user.checkDuplicatePhoneOrEmail
const createAnonymousUser = user.createAnonymousUser;
const findAllApplicants = applicant.findAllApplicants;
const applicantsController = require("../controllers/applicants.controller.js");
const usersController = require("../controllers/users.controller.js");

var router = require("express").Router();

// Apply to an Ad as a logged user
router.post("/", [ verifyToken ], applicantsController.apply);

// Apply to an Ad as an anonymous user
router.post("/anonymously", [ checkDuplicatePhoneOrEmail, createAnonymousUser ], applicantsController.applyAnonymously); 

// Get all applicants of all ads, for all users
router.get("/admin/:token", [ verifyToken, isAdmin, findAllApplicants ], usersController.findAllWithApplicants);; 

// Delete an applicant, for an ad, for a user
router.delete("/admin/:token/", [ verifyToken, isAdmin ], applicantsController.delete); 

module.exports = router;