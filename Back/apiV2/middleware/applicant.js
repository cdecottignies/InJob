const db = require("../models");
const Users = db.users;
const Applicants = db.applicants;
const Op = db.Sequelize.Op;
const validator = require("../validators/index").users;


checkDuplicatePhoneOrEmail = async (req, res, next) => {
  var error = {email: "", phone: ""};

  try {
    let user = await Users.findOne({
      where: {
        [Op.or]: [
          { email: req.body.email },
          { phone: req.body.phone }
        ]
      }
    });

    if (user.email.toLowerCase == req.body.email.toLowerCase) {
      return res
        .status(400)
        .send({
          message: `Failed ! Email ${req.body.email} is already in use!`
        });
    }

    if (user.phone.toLowerCase == req.body.phone.toLowerCase) {
      return res
        .status(400)
        .send({
          message: `Failed ! Email ${req.body.phone} is already in use!`
        });
    }

    next();
  } catch (error) {
    return res.status(500).send({
      message: "Unable to validate Username!",
      error
    });
  }
};

// Create and Save a new anonymous User
createAnonymousUser = (req, res, next) => {
  // Create a User
  const user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone
  };

  // Same validator but no password
  if (validator.createAnonymousUser.validate(user).error) {
    res.send(validator.createAnonymousUser.validate(user).error.details);
  }  else {
    // Save User in the database
    Users.create(user)
      .then(data => {
        req.body.userId = data.id
        next();
      })
      .catch(err => {
        res
          .status(500)
          .send({
            message:
              err.message || "Some error occurred while creating the AnonymousUser."
          });
      });
    }
};


// Retrieve all Applicants from the database.
findAllApplicants = (req, res, next) => {
  var allUserId = [];
  var allUniqueUserId = [];

  // Find all Applicants, userId & advertId
  Applicants.findAll()
    .then(data => {
      res
        // Get all the userId from user who applied to an advert
        for (const key in data) {
          allUserId.push(data[key].dataValues.userId)
        }

        // Keep only unique userId
        allUniqueUserId = [...new Set(allUserId)];
        
        req.body.allUniqueUserId = allUniqueUserId;
        next();
    })
    .catch(err => {
      res
        .status(500)
        .send({
          message:
              err.message || "Some error occurred while retrieving applicants, userId & advertId."
          });
    });
};

module.exports = {
  checkDuplicatePhoneOrEmail,
  createAnonymousUser,
  findAllApplicants
};
