const db = require("../models");
const Users = db.users;
const Applicants = db.applicants;
const Op = db.Sequelize.Op;


checkIfAlreadyApplied = async (req, res, next) => {
  try {
    let application = await Applicants.findOne({
      where: { [Op.and]: [
          { advertisementId: req.body.advertId }, 
          { userId: req.body.userId }
        ]}
    });

    if(application) {
      return res
        .status(400)
        .send({message: "You have already applied to this job."});
    }

    next()
    } catch (error) {
      return res.status(500).send({
        message: "Unable to validate if alreay applied !",
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
  checkIfAlreadyApplied,
  createAnonymousUser,
  findAllApplicants
};
