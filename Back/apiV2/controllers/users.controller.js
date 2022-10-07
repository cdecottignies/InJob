const db = require("../models");
const Users = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Create a User
  const user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone
  };

  // Save User in the database
  Users.create(user)
    .then(data => {
      res
        .status(201)
        .send(data)
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
  
    Users.findAll({ where: condition })
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

    Users.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find User with id=${id}.`
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

    const user = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone
    };
    
    Users.update({user}, { where: { id: id }})
      .then(data => { 
        res
        .status(200)
        .send({message: `Success, ser with the ${id} updated, ${data}`}) 
      })
      .catch(err => { 
        res
        .status(500)
        .json({message: `Error, Couldn't update the User with the ${id}, ${err}`}) 
      });
};

// Delete a Advertisement with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Users.destroy({ where: { id: id }})
      .then(num => {
        if (num == 1) {
          res
          .status(204)
          .send({
            message: "User was deleted successfully!"
          });
        } else {
          res
          .status(500)
          .send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res
        .status(500)
        .send({
          message: "Could not delete Tutorial with id=" + id
        });
      });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Users.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res
          .status(204)
          .send({ message: `${nums} Tutorials were deleted successfully!` });
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

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  Users.findAll({ where: { published: true } })
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
