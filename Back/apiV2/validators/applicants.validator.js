const Joi = require('joi');
  
// hybrid: Joi.string().valid('0', '1 day remote, 4 days office', '2 days remote, 3 days office', '3 days remote, 2 days office', '4 days remote, 1 day office').required(),
// contractLength: Joi.string(),
exports.apply = Joi.object().keys({
    advertId: Joi.number().required(),
    userId: Joi.number().required(),
    token: Joi.string()
});

exports.applyAnonymously = Joi.object().keys({
    advertId: Joi.number().required(),
    userId: Joi.number().required()
});
