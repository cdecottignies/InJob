const { auth, validate } = require("../middleware");
const verifyToken = auth.verifyToken;
const isAdmin = auth.isAdmin;
const validateCreateAdvertisement = validate.validateCreateAdvertisement;
const validateUpdateAdvertisement = validate.validateUpdateAdvertisement;
const validateDeleteAdvertisement = validate.validateDeleteAdvertisement;
const advertisementsController = require("../controllers/advertisements.controller.js");

var router = require("express").Router();




 /**
  * @swagger
  * tags:
  *   name: Books
  *   description: The books managing API
  */

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Returns the list of all the books
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: The list of the books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 */

// Create a new Advertisements
router.post("/admin/", [ verifyToken, isAdmin, validateCreateAdvertisement ], advertisementsController.create);

// Retrieve all Advertisements
router.get("/", advertisementsController.findAll);

// Retrieve one Advertisement by ID
router.get("/:id", advertisementsController.findOne);

// Update a Advertisements with id
router.put("/admin/:id", [ verifyToken, isAdmin, validateUpdateAdvertisement ], advertisementsController.update);

// Delete a Advertisements with id
router.delete("/admin/:token/:id", [ verifyToken, isAdmin, validateDeleteAdvertisement ], advertisementsController.delete);

// Delete all Advertisements
router.delete("/admin/:token", [ verifyToken, isAdmin ], advertisementsController.deleteAll);

module.exports = router;