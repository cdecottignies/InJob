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
router.post("/admin/", [ verifyToken, isAdmin, validateCreateCompanie, checkDuplicateNameOrSiret ], companies.create);

// Retrieve all Companies
router.get("/", companies.findAll);

// Update a Companies with id
router.put("/admin/:id", [ verifyToken, isAdmin, validateUpdateCompanie ], companies.update);

// Delete a Companies with id
router.delete("/admin/:token/:id", [ verifyToken, isAdmin, validateDeleteCompanie ], companies.delete);

// Delete all Companies
router.delete("/admin/:token", [ verifyToken, isAdmin ], companies.deleteAll);


module.exports = router;