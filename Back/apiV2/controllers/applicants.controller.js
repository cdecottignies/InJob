const db = require("../models");
const Applicants = db.applicants;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.apply = (req, res) => {
    // Create a Tutorial
    const applicants = {
      advertisementId: req.body.advertisementId,
      userId: req.userId // from authJwt.verifyToken
    };
  
      // Save the applied job of the user in database
      Applicants.create(applicants)
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
              err.message || "Some error occurred while adding the Ad to the User."
          });
      });
  };

  exports.applyAnonymous = (req, res) => {
    console.log('oui')
    console.log(req.userId)
    // Passer deux controller à un router
    // https://stackoverflow.com/questions/68438561/how-to-use-two-different-controllers-in-a-single-route-using-node-js
    // Create a Tutorial
    const user = {
      advertisementId: req.body.advertisementId,
      userId: req.userId
    };
  
      // Save the applied job of the user in database
      Applicants.create({
        advertisementId: req.body.advertisementId,
        userId: req.userId
      })
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
              err.message || "Some error occurred while adding the Ad to the User."
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

    // Find an advert in Database
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
        .send({ message: "Sucessfully updated."})
    })
    .catch(err => {
      res
        .status(500)
        .json(err) 
    });

    // const user = {
    //   title: req.body.title,
    //   descShort: req.body.descShort,
    //   descLong: req.body.descLong,
    //   wages: req.body.wages,
    //   place: req.body.place,
    //   degree: req.body.degree,
    //   workingTime: req.body.workingTime,
    //   workingLocation: req.body.workLocation,
    //   hybrid: req.body.hybrid,
    //   contractType: req.body.contractType,
    //   contractLength: req.body.contractLength,
    //   contractStart: req.body.contractStart,
    //   published: req.body.published ? req.body.published : false
    // };

    // Advertisements.update({ user }, { where: { id: id }})
    // .then( (data) => { res.send(data) })
    // .catch( (err) => { res.json(err) });
  };

// Delete a Advertisement with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    if (validator.deleteSchema.validate(req.body).error) {
      res.send(validator.deleteSchema.validate(req.body).error.details);
    } else {
      // Find an advert in Database
      Advertisements.destroy({where: { id: id }})
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
    } 
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
