const Joi = require('joi');
  
exports.createUser = Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    // password must be at least 8 characters long, contain at least one number, one lowercase and one uppercase letter
    // Validate it with https://regex101.com/
    password: Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/).required(),    
    phone: Joi.string().required(),
    isAdmin: Joi.boolean().required(),
});

exports.createAnonymousUser = Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),  
    phone: Joi.string().required(),
});

exports.findOneUser = Joi.object().keys({
    id: Joi.number().required(),
});

// hybrid: Joi.string().valid('0', '1 day remote, 4 days office', '2 days remote, 3 days office', '3 days remote, 2 days office', '4 days remote, 1 day office').required(),
// contractLength: Joi.string(),
exports.updateSchema = Joi.object().keys({
    id: Joi.number().required(),
    title: Joi.string(),
    descShort: Joi.string(),
    descLong: Joi.string(),
    wages: Joi.number().greater(1700),
    place: Joi.object({
        city: Joi.string(),
        street: Joi.string(),
    }),
    degree: Joi.string().valid('BAC+1', 'BAC+2', 'BAC+3', 'BAC+4', 'BAC+5'),
    workingTime: Joi.string().valid('flexible', '9 to 5'),
    workingLocation: Joi.string().valid('remote', 'office', 'hybrid'),
    contractType: Joi.string().valid('CDI', 'CDD', 'ALTERNANCE'),
    contractStart: Joi.date().timestamp(),
    published: Joi.boolean(),
});

exports.deleteSchema = Joi.object().keys({
    id: Joi.number().required()
});