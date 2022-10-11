const db = require("../models");
const Users = db.users;
const Op = db.Sequelize.Op;

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

  // Save User in the database
  Users.create(user)
    .then(data => {
      // res
      //   .status(201)
      //   .send(data);
      req.userId = data.id
      next();
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

module.exports = {
  createAnonymousUser
};
