const Joi = require('joi');

const uploadFileSchema = Joi.object({
    profile: Joi.string().required()
});

exports.Schema = uploadFileSchema;