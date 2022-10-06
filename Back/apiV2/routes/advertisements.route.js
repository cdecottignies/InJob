const advertisementsController = require("../controllers/advertisements.controller.js");

var router = require("express").Router();

// Create a new Advertisements
router.post("/", advertisementsController.create);

// Retrieve all Advertisements
router.get("/", advertisementsController.findAll);

// Retrieve all published Advertisements
router.get("/published", advertisementsController.findAllPublished);

// Retrieve a single Advertisements with id
router.get("/:id", advertisementsController.findOne);

// Update a Advertisements with id
router.put("/:id", advertisementsController.update);

// Delete a Advertisements with id
router.delete("/:id", advertisementsController.delete);

// Delete all Advertisements
router.delete("/", advertisementsController.deleteAll);

module.exports = router;