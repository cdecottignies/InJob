const { auth, validate } = require("../middleware");
const verifyToken = auth.verifyToken;
const isAdmin = auth.isAdmin;
const validateCreateUser = validate.validateCreateUser;
const users = require("../controllers/users.controller.js");

var router = require("express").Router();

// Create a new Advertisements
router.post("/", [ verifyToken, isAdmin, validateCreateUser ], users.create);

// Retrieve all Advertisements
router.get("/:token", [ verifyToken, isAdmin ], users.findAll);

// // Retrieve a single Advertisements with id
// router.get("/:id", [ verifyToken ], users.findOne);

// // Retrieve a single Advertisements with id
// router.get("/:id", [ verifyToken, isAdmin ], users.findOne);

// Update a Advertisements with id
router.put("/", [ verifyToken ], users.update);

// Update a Advertisements with id
router.put("/admin/:id", [ verifyToken, isAdmin ], users.updateAsAdmin);

// Delete a Advertisements with id
router.delete("/:id", [ verifyToken, isAdmin ], users.delete);
  
module.exports = router;