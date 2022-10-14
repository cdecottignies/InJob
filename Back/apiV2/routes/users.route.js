const { auth, validate } = require("../middleware");
const verifyToken = auth.verifyToken;
const isAdmin = auth.isAdmin;
const validateCreateUser = validate.validateCreateUser;
const validateFindOneUser = validate.validateFindOneUser;
const validateUpdateUser = validate.validateUpdateUser;
const validateUpdateUserAsAdmin = validate.validateUpdateUserAsAdmin;
const validateDeleteUser = validate.validateDeleteUser;
const users = require("../controllers/users.controller.js");

var router = require("express").Router();

// Create a new Advertisements
router.post("/", [ verifyToken, isAdmin, validateCreateUser ], users.create);

// Retrieve all Advertisements
router.get("/admin/:token", [ verifyToken, isAdmin ], users.findAll);

// The user access to his profile
router.get("/:token", [ verifyToken, validateFindOneUser ], users.findOne);

// The user can update his profile
router.put("/:id", [ verifyToken, validateUpdateUser ], users.update);

// The admin update the profile of the user
router.put("/admin/:token", [ verifyToken, isAdmin, validateUpdateUserAsAdmin ], users.updateAsAdmin);

// The user can delete his profile
router.delete("/", [ verifyToken, validateDeleteUser ], users.delete);
  
// The admin can delete an user account
router.delete("/admin/:id", [ verifyToken, isAdmin, validateDeleteUser ], users.deleteAsAdmin);


module.exports = router;