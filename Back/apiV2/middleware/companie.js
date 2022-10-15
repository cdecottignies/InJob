const db = require("../models");
const Companies = db.companies;
const Op = db.Sequelize.Op;

checkDuplicateNameOrSiret = async (req, res, next) => {

  var error = {name: "", siret: ""};

  try {
    let companieName = await Companies.findOne({
      where: { name: req.body.name }
    });

    if(companieName) {
      error.name = `Failed ! Companie name ${req.body.name} is already in use !`;
    }

    let companieSiret = await Companies.findOne({
      where: { siret: req.body.siret }
    });

    if (companieSiret) {
      error.siret = `Failed ! Companie siret ${req.body.siret} is already in use !`;
    }

    if (error.name || error.siret) {
      return res
        .status(400)
        .send(error);
    }

    next()
    } catch (error) {
      return res.status(500).send({
        message: "Unable to validate Companie information !",
        error
      });
    }
};

module.exports = {
  checkDuplicateNameOrSiret
};
