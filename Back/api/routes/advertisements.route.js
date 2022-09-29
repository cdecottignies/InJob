module.exports = app => {
    const tutorials = require("../controllers/advertisements.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Advertisements
    router.post("/", tutorials.create);
  
    // Retrieve all Advertisements
    router.get("/", tutorials.findAll);
  
    // Retrieve all published Advertisements
    router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Advertisements with id
    router.get("/:id", tutorials.findOne);
  
    // Update a Advertisements with id
    router.put("/:id", tutorials.update);
  
    // Delete a Advertisements with id
    router.delete("/:id", tutorials.delete);
  
    // Delete all Advertisements
    router.delete("/", tutorials.deleteAll);
  
    app.use('/api/advertisements', router);
  };