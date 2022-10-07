const db = require("../models");
const config = require("../config/auth.config");
const Users = db.users;

const Op = db.Sequelize.Op;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {

  const newUser = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    phone: req.body.phone
  };

    Users.create(newUser)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({
          message:
            err.message || "Some error occured while creating the User."
        });    
      });
    };
  // Save User to Database
  // try {
  //   const user = await User.create({
  //       firstName: req.body.firstname,
  //       lastName: req.body.lastName,
  //       email: req.body.email,
  //       password: bcrypt.hashSync(req.body.password, 8),
  //       phone: req.body.phone
  //   });

  //   // How to moderate isAdmin

  //   // if (req.body.roles) {
  //   //   const roles = await Role.findAll({
  //   //     where: {
  //   //       name: {
  //   //         [Op.or]: req.body.roles,
  //   //       },
  //   //     },
  //   //   });

  //   //   const result = user.setRoles(roles);
  //   if (user) res.send({ message: "User registered successfully!" });
  //   } else {
  //     // user has role = 1
  //     const result = user.setRoles([1]);
  //     if (!user) res.send({ message: "User registered successfully!" });
  //   }
  // } catch (error) {
  //   res.status(500).send({ message: error.message });
  // }
// };

exports.signin = async (req, res) => {
  try {
    const user = await Users.findOne({ where: { email: req.body.email }});

    if (!user) {
      return res
              .status(404)
              .send({ message: "Email Not found." });
    }

    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!passwordIsValid) {
      return res
              .status(401)
              .send({ message: "Invalid Password!" });
    }

    const token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 86400, // 24 hours
    });

    // let authorities = [];
    // const roles = await user.getRoles();
    // for (let i = 0; i < roles.length; i++) {
    //   authorities.push("ROLE_" + roles[i].name.toUpperCase());
    // }

    req.session.token = token;

    return res.status(200).send({
      id: user.id,
      lastName: user.lastName,
      email: user.email,
      // roles: authorities,
    });
  } catch (error) {
    return res
            .status(500)
            .send({ message: error.message });
  }
};

exports.signout = async (req, res) => {
  try {
    req.session = null;
    return res.status(200).send({
      message: "You've been signed out!"
    });
  } catch (err) {
    this.next(err);
  }
};
