const { auth, companie, validate } = require("../middleware");
const verifyToken = auth.verifyToken;
const isAdmin = auth.isAdmin;
const validateCreateCompanie = validate.validateCreateCompanie;
const validateUpdateCompanie = validate.validateUpdateCompanie;
const validateDeleteCompanie = validate.validateDeleteCompanie;
const checkDuplicateNameOrSiret = companie.checkDuplicateNameOrSiret;
const companies = require("../controllers/companies.controller.js");

var router = require("express").Router();

// Create a new Companies
router.post("/", [ verifyToken, isAdmin, validateCreateCompanie, checkDuplicateNameOrSiret ], companies.create);

// Retrieve all Companies
router.get("/", [ verifyToken, isAdmin ], companies.findAll);

// Update a Companies with id
router.put("/:id", [ verifyToken, isAdmin, validateUpdateCompanie ], companies.update);

// Delete a Companies with id
router.delete("/:id", [ verifyToken, isAdmin, validateDeleteCompanie ], companies.delete);

// Delete all Companies
router.delete("/", [ verifyToken, isAdmin ], companies.deleteAll);


module.exports = router;