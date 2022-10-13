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
  
    if (validator.apply.validate(req.body).error) {
      res.send(validator.apply.validate(req.body).error.details);
    }  else {
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
              err.message || "Some error occurred while adding the Ad to the User."
          });
      });
    }
  };

  exports.applyAnonymously = (req, res) => {
    // Create a link between an unregistred user and advertisement
    const apply = {
      advertisementId: req.body.advertId,
      userId: req.body.userId
    };
  
    if (validator.applyAnonymously.validate(apply).error) {
      res.send(validator.applyAnonymously.validate(apply).error.details);
    }  else {
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
              err.message || "Some error occurred while adding the Ad to the User."
          });
      });
    }
  };

