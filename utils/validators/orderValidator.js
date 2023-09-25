const Joi = require("joi");

const confirmOrder = Joi.object({
    orderId: Joi.string().required(),
    paymentMethod: Joi.valid('COD', 'Online').required()
})

module.exports = {
    confirmOrder
}