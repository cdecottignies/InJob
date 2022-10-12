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
      res
        .status(201)
        .send({message: `New User signep up.`});
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
              .send({ message: "Invalid Password !" });
    }

    const token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 3600, // 1 hour
    });

    // const todayAsDay = new Date.now();
    // const todayAsNumber = todayAsDay.getTime() / 3600;

    // console.log(todayAsDay);
    // console.log(Math.round((todayAsDay.getTime())));

    // For a weird reason I have to put 3hours as maxAge to get the cookie to expire in 1 hour
    return res
            .status(200)
            // .cookie("access_token", token, { 
            //   // maxAge: (2 * 60 * 60 * 1000) + 3600000,
            //   maxAge: 3 * 3600000,
            //   httpOnly: true,
            //   secure: process.env.NODE_ENV === "production"
            // })
            .json({ access_token: token, message: `You've been signed in! ${user.email}`, isConnect: true });
  } catch (error) {
    return res
            .status(500)
            .send({ message: error.message });
  }
};

exports.signout = async (req, res) => {
  try {
    req.session = null;
    return res
            .status(200)
            .send({
              message: "You've been signed out!"
            });
  } catch (err) {
    this.next(err);
  }
};
