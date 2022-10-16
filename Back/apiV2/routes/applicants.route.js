const { auth, user, applicant, validate } = require("../middleware");
const verifyToken = auth.verifyToken;
const isAdmin = auth.isAdmin;
// const checkDataForAnonymousApply = applicant.checkDataForAnonymousApply;
const checkDuplicatePhoneOrEmail = user.checkDuplicatePhoneOrEmail
const createAnonymousUser = user.createAnonymousUser;
const findAllApplicants = applicant.findAllApplicants;
const checkIfAlreadyApplied = applicant.checkIfAlreadyApplied;
const validateApplyToAdvert = validate.validateApplyToAdvert;
const validateApplyAnonymouslyToAdvert = validate.validateApplyAnonymouslyToAdvert;
const validateUpdateApplication = validate.validateUpdateApplication;
const validateDeleteApplication = validate.validateDeleteApplication;
const applicantsController = require("../controllers/applicants.controller.js");
const usersController = require("../controllers/users.controller.js");

var router = require("express").Router();

// Apply to an Ad as a logged user
router.post("/", [ verifyToken, checkIfAlreadyApplied, validateApplyToAdvert ], applicantsController.apply);

// Apply to an Ad as an anonymous user
router.post("/anonymously", [ validateApplyAnonymouslyToAdvert, checkDuplicatePhoneOrEmail, createAnonymousUser ], applicantsController.applyAnonymously); 

// Get all applicants of all ads, for all users
// router.get("/admin/:token", [ verifyToken, isAdmin, findAllApplicants ], usersController.findAllWithApplicants);
router.get("/admin/:token", [ verifyToken, isAdmin ], applicantsController.findAll);

// Update one applicant
router.put("/admin/:id", [ verifyToken, isAdmin, validateUpdateApplication ], applicantsController.update);

// Delete an applicant, for an ad, for a user
router.delete("/admin/:token/:id", [ verifyToken, isAdmin, validateDeleteApplication ], applicantsController.delete); 

// Delete all applicants, for all ads, for all users
router.delete("/admin/:token", [ verifyToken, isAdmin ], applicantsController.deleteAll);


module.exports = router;