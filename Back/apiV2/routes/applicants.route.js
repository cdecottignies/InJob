const { authJwt } = require("../middleware");
const verifyToken = authJwt.verifyToken;
const applicantsController = require("../controllers/applicants.controller.js");

var router = require("express").Router();

// Create a new Advertisements
router.post("/", [ verifyToken ], applicantsController.apply);

// Retrieve all Advertisements
router.get("/", [ verifyToken ], applicantsController.findAll);

// Retrieve a single Advertisements with id
router.get("/:id", [ verifyToken ], applicantsController.findOne);

// Update a Advertisements with id
router.put("/:id", [ verifyToken ], applicantsController.update);

// Delete a Advertisements with id
router.delete("/:id", [ verifyToken ], applicantsController.delete);

// Delete all Advertisements
router.delete("/", [ verifyToken ], applicantsController.deleteAll);

module.exports = router;