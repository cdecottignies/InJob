const db = require("../models");
// const ROLES = db.ROLES; On ne fait pas de role à proprement parler
const Users = db.users;

checkDuplicateUsernameOrEmail = async (req, res, next) => {

  try {
    // Email
    let user = await Users.findOne({
      where: {
        email: req.body.email
      }
    });

    if (user) {
      return res.status(400).send({
        message: "Failed! Email is already in use!"
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

// checkRolesExisted = (req, res, next) => {
//   if (req.body.roles) {
//     for (let i = 0; i < req.body.roles.length; i++) {
//       if (!ROLES.includes(req.body.roles[i])) {
//         res.status(400).send({
//           message: "Failed! Role does not exist = " + req.body.roles[i]
//         });
//         return;
//       }
//     }
//   }
  
//   next();
// };

module.exports = {
    checkDuplicateUsernameOrEmail
    // checkRolesExisted
};
