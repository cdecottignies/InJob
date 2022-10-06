const db = require("../models");
const Advertisements = db.advertisements;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const advertisements = {
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
  };

  // Save Tutorial in the database
  Advertisements.create(advertisements)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Advertisements.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Advertisements.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Tutorial with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Advertisements.update({
      title: req.body.title,
      descshort: req.body.descshort,
      desclong: req.body.desclong,
      salary: req.body.salary,
      place: req.body.place,
      workingTime: req.body.workingTime,
      contract: req.body.contract,
      published: req.body.published ? req.body.published : false
    },
    {
      where: { id: id }
    }).then( (data) => { res.send(data) })
    .catch( (err) => { res.json(err) });
};

// Delete a Advertisement with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Advertisements.destroy({
      where: {
        id: id
      }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + id
        });
      });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Advertisements.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Tutorials were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all tutorials."
          });
        });
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  Advertisements.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};
