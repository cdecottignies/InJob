const Joi = require('joi');
  
// hybrid: Joi.string().valid('0', '1 day remote, 4 days office', '2 days remote, 3 days office', '3 days remote, 2 days office', '4 days remote, 1 day office').required(),
// contractLength: Joi.string(),
exports.applyToAdvert = Joi.object().keys({
    advertId: Joi.number().required(),
    userId: Joi.number().required()
});

exports.applyAnonymouslyToAdvert = Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    advertId: Joi.number().required()
});

exports.deleteApplication = Joi.object().keys({
    id: Joi.number().required()
});
