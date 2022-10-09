const users = require("../controllers/users.controller.js");

var router = require("express").Router();

// Create a new Advertisements
router.post("/", users.create);

// Retrieve all Advertisements
router.get("/", users.findAll);

// Retrieve all published Advertisements
router.get("/published", users.findAllPublished);

// Retrieve a single Advertisements with id
router.get("/:id", users.findOne);

// Update a Advertisements with id
router.put("/:id", users.update);

// Delete a Advertisements with id
router.delete("/:id", users.delete);
  
module.exports = router;