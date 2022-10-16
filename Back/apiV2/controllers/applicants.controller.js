const db = require("../models");
const Applicants = db.applicants;
const Op = db.Sequelize.Op;
const validator = require("../validators/index").applicants;

// Apply to a job
exports.apply = (req, res) => {
    // Create a link between user and advertisement
    const applicants = {
      advertisementId: req.body.advertId,
      userId: req.body.userId // from authJwt.verifyToken
    };
  
    // Save the applied job of the user in database
    Applicants.create(applicants)
    .then(data => {
        res
        .status(200)
        .send({message: "You have successfully applied to this job."});
    })
    .catch(err => {
        res
        .status(500)
        .send({
            message:
            err.message || "Some error occurred while Applying."
        });
    });
  };

  exports.applyAnonymously = (req, res) => {
    // Create a link between an unregistred user and advertisement
    const apply = {
      advertisementId: req.body.advertId,
      userId: req.body.userId
    };
  
    // Save the applied job of the anonymous user in database
    Applicants.create(apply)
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
            err.message || "Some error occurred while Applying."
        });
    });
  };

  exports.findAll = (req, res) => {
    Applicants.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res
        .status(500)
        .send({
            message:
            err.message || "Some error occurred while retrieving applicants."
        });
    });
  };

// Delete an User with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Applicants.destroy({ where: { id: id }})
    .then(num => {
      if (num == 1) {
        res
        .status(204)
        .send();
      } else {
        res
        .status(500)
        .send({
          message: `Cannot delete Applicant with id=${id}. Maybe Applicant was not found!`
        });
      }
    })
    .catch(err => {
      res
      .status(500)
      .send({
        message: "Could not delete Applicantion with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
  Applicants.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Applicants were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all applicants."
      });
    });
}

