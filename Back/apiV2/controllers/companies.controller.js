const db = require("../models");
const Companies = db.companies;
const Op = db.Sequelize.Op;
const validator = require("../validators/index").companies;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // The companie name must be unique
  
  // Create a Companie
  const companies = {
    name: req.body.name,
    SIRET: req.body.siret,
    numEmploye: req.body.numEmploye,
    desc: req.body.desc,
    link: req.body.link,
    logo: req.body.logo
  };

  // Save Tutorial in the database
  Companies.create(companies)
    .then(data => {
      res
        .status(201)
        .send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({
          message:
            err.message || "Some error occurred while creating the Companie."
        });
    });
};

// Retrieve all Companies from the database.
exports.findAll = (req, res) => {
  
    Companies.findAll()
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
              err.message || "Some error occurred while retrieving companies."
          });
      });
};

// Find a single Companie with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Companies.findByPk(id)
      .then(data => {
        if (data) {
          res
            .status(200)
            .send(data);
        } else {
          res
            .status(404)
            .send({
              message: `Cannot find Companie with id=${id}.`
            });
        }
      })
      .catch(err => {
        res
          .status(500)
          .send({
            message: "Error retrieving Companie with id=" + id
          });
      });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Companies.update({
      name: req.body.name,
      SIRET: req.body.siret,
      numEmploye: req.body.numEmploye,
      desc: req.body.desc,
      link: req.body.link,
      logo: req.body.logo
    },
    { where: { id: id } })
    .then( (data) => { 
      res
        .status(200)
        .send(data) 
      })
    .catch( (err) => { 
      res
        .status(500)
        .json(err)
        });
};

// Delete a Advertisement with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Companies.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res
            .status(204)
        } else {
          res
            .send({
              message: `Cannot delete Companie with id=${id}. Maybe Companie was not found!`
            });
        }
      })
      .catch(err => {
        res
          .status(500)
          .send({
            message: "Could not delete Companie with id=" + id
          });
      });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Companies.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res
            .status(204)
        })
        .catch(err => {
          res
            .status(500)
            .send({
              message:
                err.message || "Some error occurred while removing all tutorials."
            });
        });
};