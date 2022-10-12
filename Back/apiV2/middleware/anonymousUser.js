const db = require("../models");
const Users = db.users;
const Op = db.Sequelize.Op;
const validator = require("../validators/index").users;

// Same validator but no password
// Create and Save a new anonymous User
createAnonymousUser = (req, res, next) => {
  // Create a User
  const user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone
  };

  if (validator.applyAnonymousUser.validate(req.body).error) {
    res.send(validator.applyAnonymousUser.validate(req.body).error.details);
  }  else {
    // Save User in the database
    Users.create(user)
      .then(data => {
        
        req.userId = data.id
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

module.exports = {
  createAnonymousUser
};
