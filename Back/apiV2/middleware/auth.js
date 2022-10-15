const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const Users = db.users;

verifyToken = (req, res, next) => {
  let token = req.params.token === undefined ? req.body.token : req.params.token;

  // console.log(req.method)
  if (!token) {
    return res
            .status(403)
            .send({
              message: "No token provided!",
            });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }
    // Delete the token from the request
    delete req.body.token;

    // Store the user id in the request body
    req.body.userId = decoded.id;

    next();
  });
};

isAdmin = async (req, res, next) => {

  try {
    let user = await Users.findByPk(req.body.userId);
    const isAdmin = user.isAdmin;
    
    if(isAdmin) {
        return next()
    } else {
        return res.status(403).send({
          message: "Require Admin Role!",
        });
    }
  } catch (error) {
    return res.status(500).send({
      message: "Unable to validate User role!",
    });
  }
};

// isModerator = async (req, res, next) => {
//   try {
//     const user = await User.findByPk(req.userId);
//     const roles = await user.getRoles();

//     for (let i = 0; i < roles.length; i++) {
//       if (roles[i].name === "moderator") {
//         return next();
//       }
//     }

//     return res.status(403).send({
//       message: "Require Moderator Role!",
//     });
//   } catch (error) {
//     return res.status(500).send({
//       message: "Unable to validate Moderator role!",
//     });
//   }
// };

// isModeratorOrAdmin = async (req, res, next) => {
//   try {
//     const user = await User.findByPk(req.userId);
//     const roles = await user.getRoles();

//     for (let i = 0; i < roles.length; i++) {
//       if (roles[i].name === "moderator") {
//         return next();
//       }

//       if (roles[i].name === "admin") {
//         return next();
//       }
//     }

//     return res.status(403).send({
//       message: "Require Moderator or Admin Role!",
//     });
//   } catch (error) {
//     return res.status(500).send({
//       message: "Unable to validate Moderator or Admin role!",
//     });
//   }
// };

module.exports = {
    verifyToken,
    isAdmin
  //   ,
  //   isModerator,
  //   isModeratorOrAdmin,
  };
