const db = require("../models");
const Companies = db.companies;
const Op = db.Sequelize.Op;

checkDuplicateNameOrSIRET = async (req, res, next) => {

  // Companie Name
  try {
    let companie = await Companies.findOne({
      where: {
        [Op.or]: [
          { name: req.body.name },
          { SIRET: req.body.siret }
        ]
      }
    });

    if(companie.name.toLowerCase == req.body.name.toLowerCase) {
      return res
        .status(400)
        .send({
          message: `Failed ! Companie name ${req.body.name} is already in use !`
        });
    }
    
     if (companie.SIRET.toLowerCase == req.body.siret.toLowerCase) {
      return res
        .status(400)
        .send({
          message: `Failed ! Companie SIRET ${req.body.siret} is already registered!`
        });
    }

    next();
  } catch (error) {
    return res
      .status(500)
      .send({
        message: "Unable to validate Companie creationoui !",
        error
      });
  }
};

module.exports = {
  checkDuplicateNameOrSIRET
};
