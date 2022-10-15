const userValidator = require("../validators/index").users;
const advertValidator = require("../validators/index").advertisements;
const companieValidator = require("../validators/index").companies;


// User validation
validateCreateUser = async (req, res, next) => {
  if (userValidator.createUser.validate(req.body).error) {
      res.send(userValidator.createUser.validate(req.body).error.details);
    }  else {
      next();
    }
}

validateCreateAnonymousUser = async (req, res, next) => {
  if (userValidator.createAnonymousUser.validate(req.body).error) {
      res.send(userValidator.createAnonymousUser.validate(req.body).error.details);
    }  else {
      next();
    }
}

validateFindOneUser = async (req, res, next) => {
  if (userValidator.findOneUser.validate(req.body).error) {
      res.send(userValidator.findOneUser.validate(req.body).error.details);
    }  else {
      next();
    }
}

validateUpdateUser = async (req, res, next) => {
  if (userValidator.updateUser.validate(req.body).error) {
      res.send(userValidator.updateUser.validate(req.body).error.details);
    }  else {
      next();
    }
}

validateUpdateUserAsAdmin = async (req, res, next) => {
  delete req.body.userId;
  if (userValidator.updateUserAsAdmin.validate(req.body).error) {
      res.send(userValidator.updateUserAsAdmin.validate(req.body).error.details);
    }  else {
      next();
    }
}

validateDeleteUser = async (req, res, next) => {
  if (userValidator.deleteUser.validate(req.body).error) {
      res.send(userValidator.deleteUser.validate(req.body).error.details);
    }  else {
      next();
    }
}


// Advertisement validation
validateCreateAdvertisement = async (req, res, next) => {
  if (advertValidator.createAdvertisement.validate(req.body).error) {
      res.send(advertValidator.createAdvertisement.validate(req.body).error.details);
    }  else {
      next();
    }
}

validateUpdateAdvertisement = async (req, res, next) => {
  delete req.body.userId
  if (advertValidator.updateAdvertisement.validate(req.body).error) {
      res.send(advertValidator.updateAdvertisement.validate(req.body).error.details);
    }  else {
      next();
    }
}

validateDeleteAdvertisement = async (req, res, next) => {
  if (advertValidator.deleteAdvertisement.validate(req.body).error) {
      res.send(advertValidator.deleteAdvertisement.validate(req.body).error.details);
    }  else {
      next();
    }
}


// Companie
validateCreateCompanie = async (req, res, next) => {
  delete req.body.userId;
  if (companieValidator.createCompanie.validate(req.body).error) {
      res.send(companieValidator.createCompanie.validate(req.body).error.details);
    }  else {
      next();
    }
}

validateFindByPK = async (req, res, next) => {
  if (companieValidator.findByPK.validate(req.body).error) {
      res.send(companieValidator.findByPK.validate(req.body).error.details);
    }  else {
      next();
    }
}

validateUpdateCompanie = async (req, res, next) => {
  if (companieValidator.updateCompanie.validate(req.body).error) {
      res.send(companieValidator.updateCompanie.validate(req.body).error.details);
    }  else {
      next();
    }
}

validateDeleteCompanie = async (req, res, next) => {
  if (companieValidator.deleteCompanie.validate(req.body).error) {
      res.send(companieValidator.deleteCompanie.validate(req.body).error.details);
    }  else {
      next();
    }
}


module.exports = {
  validateCreateUser,
  validateCreateAnonymousUser,
  validateFindOneUser,
  validateUpdateUser,
  validateUpdateUserAsAdmin,
  validateDeleteUser,
  validateCreateAdvertisement,
  validateUpdateAdvertisement,
  validateDeleteAdvertisement,
  validateCreateCompanie,
  validateFindByPK,
  validateUpdateCompanie,
  validateDeleteCompanie
};
