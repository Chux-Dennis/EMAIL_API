import Joi from "joi";

const sendMailSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email(),
  number: Joi.any(),
  subject: Joi.string().required(),
  message: Joi.string().required(),
});

export default sendMailSchema;
