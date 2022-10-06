const companies = require("../controllers/companies.controller.js");

var router = require("express").Router();

// Create a new Advertisements
router.post("/", companies.create);

// Retrieve all Advertisements
router.get("/", companies.findAll);

// Retrieve all published Advertisements
router.get("/published", companies.findAllPublished);

// Retrieve a single Advertisements with id
router.get("/:id", companies.findOne);

// Update a Advertisements with id
router.put("/:id", companies.update);

// Delete a Advertisements with id
router.delete("/:id", companies.delete);

// Delete all Advertisements
router.delete("/", companies.deleteAll);


module.exports = router;