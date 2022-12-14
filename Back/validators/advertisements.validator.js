const Joi = require('joi');

// hybrid: Joi.string().valid('0', '1 day remote, 4 days office', '2 days remote, 3 days office', '3 days remote, 2 days office', '4 days remote, 1 day office').required(),
// contractLength: Joi.string(),
exports.createAdvertisement = Joi.object().keys({
    // WIP associate with advert
    // companieId: Joi.number().required(),
    userId: Joi.number().required(),
    title: Joi.string().required(),
    descShort: Joi.string().required(),
    descLong: Joi.string().required(),
    wages: Joi.number().greater(1700).required(),
    place: Joi.object({
        city: Joi.string().required(),
        street: Joi.string(),
    }),
    degree: Joi.string().valid('BAC+1', 'BAC+2', 'BAC+3', 'BAC+4', 'BAC+5').required(),
    workingTime: Joi.string().valid('flexible', '9 to 5').required(),
    workingLocation: Joi.string().valid('remote', 'office', 'hybrid').required(),
    contractType: Joi.string().valid('CDI', 'CDD', 'ALTERNANCE').required(),
    contractStart: Joi.string(),
    published: Joi.boolean(),
});

exports.findOneAdvertisement = Joi.object().keys({
    id: Joi.number().required(),
});

// hybrid: Joi.string().valid('0', '1 day remote, 4 days office', '2 days remote, 3 days office', '3 days remote, 2 days office', '4 days remote, 1 day office').required(),
// contractLength: Joi.string(),
exports.updateAdvertisement = Joi.object().keys({
    id: Joi.number().required(),
    title: Joi.string(),
    descShort: Joi.string(),
    descLong: Joi.string(),
    wages: Joi.number().greater(1200),
    place: Joi.object({
        city: Joi.string(),
        street: Joi.string()

    }),
    degree: Joi.string().valid('BAC+1', 'BAC+2', 'BAC+3', 'BAC+4', 'BAC+5'),
    workingTime: Joi.string().valid('flexible', '9 to 5'),
    workingLocation: Joi.string().valid('remote', 'office', 'hybrid'),
    contractType: Joi.string().valid('CDI', 'CDD', 'ALTERNANCE'),
    contractStart: Joi.string(),
    published: Joi.boolean(),
    createdAt: Joi.string(),
});

exports.deleteAdvertisement = Joi.object().keys({
    token: Joi.string().required(),
    id: Joi.number().required()
});