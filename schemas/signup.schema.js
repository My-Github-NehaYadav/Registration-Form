const Joi = require('joi');

const userSchema = Joi.object({
    username: Joi.string().required().min(3).max(10),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: Joi.string().required(),
    phone_number: Joi.number().integer().min(10**9).max(10**10 - 1).required(),
});

exports.Schema = userSchema;