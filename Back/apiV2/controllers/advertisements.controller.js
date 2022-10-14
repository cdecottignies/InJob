const db = require("../models");
const Advertisements = db.advertisements;
const Op = db.Sequelize.Op;
const validator = require("../validators/index").advertisements;

// Create and Save a new Advertisement
exports.create = (req, res) => {
  // Create an advertisement
  // TODO: get the companieId from the companie name from a middleware I guess
  const advertisements = {
    companieId: req.body.companieId,
    userId: req.body.userId,
    title: req.body.title,
    descShort: req.body.descShort,
    descLong: req.body.descLong,
    wages: req.body.wages,
    place: req.body.place,
    degree: req.body.degree,
    workingTime: req.body.workingTime,
    workingLocation: req.body.workingLocation,
    contractType: req.body.contractType,
    contractStart: req.body.contractStart,
    published: req.body.published ? req.body.published : false
  };

  // Save Tutorial in the database
  Advertisements.create(advertisements)
  .then(data => {
    res
      .status(201)
      .send(data)
  })
  .catch(err => {
    res
      .status(500)
      .send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
  });
};

// Retrieve all Advertisements from the database.
exports.findAll = (req, res) => {
    Advertisements.findAll({ })
      .then(data => {
        res
          .status(200)
          .send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({
            message:
              err.message || "Some error occurred while retrieving advertisements."
          });
      });

};

// Find a single advertisement with an id
exports.findOne = (req, res) => {

    // Find an advert in Database
    Advertisements.findByPk(req.params.id)
    .then(data => {
      if (data) {
        res
          .status(200)
          .send(data);
      } else {
        res
          .status(404)
          .send({
            message: `Cannot find advertisement with id=${id}.`
          });
      }
    })
    .catch(err => {
      res
        .status(500)
        .send({
          message: "Error retrieving Advertisement with id=" + id
        });
    });
};

// Update an advertisement by the id in the request
exports.update = (req, res) => {
  let id = req.params.id
  
  console.log(req.body)
  Advertisements.update({
    title: req.body.title,
    descShort: req.body.descShort,
    descLong: req.body.descLong,
    wages: req.body.wages,
    place: req.body.place,
    degree: req.body.degree,
    workingTime: req.body.workingTime,
    workingLocation: req.body.workLocation,
    hybrid: req.body.hybrid,
    contractType: req.body.contractType,
    contractLength: req.body.contractLength,
    contractStart: req.body.contractStart,
    published: req.body.published ? req.body.published : false
  },
  { where: { id: id }})
  .then(() => { 
    res
      .status(200)
      .send({ message: `Advertisement with id=${id} sucessfully updated.`})
  })
  .catch(err => {
    res
      .status(500)
      .json(err) 
  });
};

// Delete a Advertisement with the specified id in the request
exports.delete = (req, res) => {
    let id = req.params.id

    // Delete advert
    Advertisements.destroy({where: { id: id }})
    .then(num => {
      if (num == 1) {
        res
          .status(204)
          .send()
      } else {
        res
          .status(404)
          .send({
            message: `Cannot delete advertisement with id=${id}. Maybe advertisement was not found!`
          });
      }
    })
    .catch(err => {
      res
      .status(500)
      .send({
          message: "Could not delete Advertisement with id=" + id
        });
    });
};

// Delete all Advert from the database.
exports.deleteAll = (req, res) => {
  // In case I want to delete specifc adverts, like all adverts from a specific user
  Advertisements.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res
            .status(200)
            .send({ message: `${nums} advertisements were deleted successfully!` });
        })
        .catch(err => {
          res
            .status(500)
            .send({
              message: err.message || "Some error occurred while removing all advertisements."
            });
        });
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  Advertisements.findAll({ where: { published: true } })
    .then(data => {
      res
        .send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({
        message:
            err.message || "Some error occurred while retrieving advertisements."
        });
    });
};
