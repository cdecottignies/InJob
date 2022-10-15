const db = require("../models");
const Users = db.users;
const Companies = db.companies;
const Advertisements = db.advertisements;
const Op = db.Sequelize.Op;
const validator = require("../validators/index").users;
const bcrypt = require("bcryptjs");

// Create and Save a new User
exports.create = (req, res) => {
  delete req.body.userId;

  // Create a User
  const user = {
    companieId: req.body.companieId,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,    
    password: bcrypt.hashSync(req.body.password, 8),
    phone: req.body.phone,
    isAdmin: req.body.isAdmin ? req.body.isAdmin : false
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
            err.message || "Some error occurred while creating the User."
        });
      });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {

    // Find all Users and there associated advertisements and the associated companie
    Users.findAll({
      include: [{
          model: Advertisements,
      }]
    })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving users and there associated advertisements."
        });
      });
};

// Retrieve all Users from the database.
exports.findAllWithApplicants = (req, res) => {

  // Find all Users and there associated advertisements and the associated companie
  Users.findAll({
    include: [{
        model: Advertisements,
    }],
    where: {
      id: {
        [Op.or]: [ req.body.allUniqueUserId ]
      }
    }
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users and there associated advertisements."
      });
    });
};


// Find a single User with an id
exports.findOne = (req, res) => {
  let id = req.body.userId;

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
        message: "Error retrieving User with id=" + id
      });
    });
};

// Update a User by the id contain in the token
exports.update = (req, res) => {
    const id = req.body.userId;
    console.log(req.body);

    Users.update({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      // password: bcrypt.hashSync(req.body.password, 8),
    },
    { where: { id: id } })
      .then(data => { 
        res
        .status(204)
        .send() 
      })
      .catch(err => { 
        res
        .status(500)
        .json({message: `Error, Couldn't update the User with the ${id}, ${err}`}) 
      });
};

// Update a User by the id in the request, must be admin
exports.updateAsAdmin = (req, res) => {
  const id = req.params.id;

    Users.update({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,    
      // password: bcrypt.hashSync(req.body.password, 8),
      phone: req.body.phone,
      isAdmin: req.body.isAdmin,
    },
    { where: { id: id }})
      .then(data => { 
        res
        .status(204)
        .send() 
      })
      .catch(err => { 
        res
        .status(500)
        .json({message: `Error, Couldn't update the User with the ${id}, ${err}`}) 
      });
};


// Delete an User with the specified id in the request
exports.delete = (req, res) => {
    const id = req.body.userId;

    Users.destroy({ where: { id: id }})
      .then(num => {
        if (num == 1) {
          res
          .status(204)
          .send();
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
          message: "Could not delete User with id=" + id
        });
      });
};


// Delete an User with the specified id in the request
exports.deleteAsAdmin = (req, res) => {
  const id = req.params.id;

  Users.destroy({ where: { id: id }})
    .then(num => {
      if (num == 1) {
        res
        .status(204)
        .send();
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

// Delete all Advert from the database.
exports.deleteAll = (req, res) => {
  // In case I want to delete specifc adverts, like all adverts from a specific user
  Users.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res
            .status(200)
            .send({ message: `${nums} users were deleted successfully!` });
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
