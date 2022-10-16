const Joi = require('joi');
  
// hybrid: Joi.string().valid('0', '1 day remote, 4 days office', '2 days remote, 3 days office', '3 days remote, 2 days office', '4 days remote, 1 day office').required(),
// contractLength: Joi.string(),
exports.createCompanie = Joi.object().keys({
    name: Joi.string().required(),
    siret: Joi.string().length(14).required(),
    numEmploye: Joi.number().required(),
    desc: Joi.string().required(),
    link: Joi.string().required(),
    logo: Joi.string().required()
});

exports.findByPK = Joi.object().keys({
    id: Joi.number().required()
})

exports.updateCompanie = Joi.object().keys({
    id: Joi.number(),
    name: Joi.string(),
    siret: Joi.string().length(14),
    numEmploye: Joi.number(),
    desc: Joi.string(),
    link: Joi.string(),
    logo: Joi.string(),
    createdAt: Joi.string()
});

exports.deleteCompanie = Joi.object().keys({
    id: Joi.number().required()
});
