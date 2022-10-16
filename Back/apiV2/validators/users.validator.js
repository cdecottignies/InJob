const Joi = require('joi');
  
exports.createUser = Joi.object().keys({
    companieId: Joi.number().integer().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    // password must be at least 8 characters long, contain at least one number, one lowercase and one uppercase letter
    // Validate it with https://regex101.com/
    password: Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/).required(),    
    phone: Joi.string().required(),
    isAdmin: Joi.boolean(),
    userId: Joi.number().required(),
});

exports.createAnonymousUser = Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),  
    phone: Joi.string().required(),
});

exports.findOneUser = Joi.object().keys({
    userId: Joi.number().required(),
});

exports.updateUser = Joi.object().keys({
    id: Joi.number(),
    userId: Joi.number().required(),
    firstName: Joi.string(),
    lastName: Joi.string(),
    // WIP
    password: Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/).required()
});

exports.updateUserAsAdmin = Joi.object().keys({
    id: Joi.number(),
    companieId: Joi.number(),
    firstName: Joi.string(),
    lastName: Joi.string(),
    email: Joi.string().email(),
    // WIP
    // password: Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/).required(),
    phone: Joi.string(),
    isAdmin: Joi.boolean(),
});

exports.deleteUser = Joi.object().keys({
    userId: Joi.number().required()
});