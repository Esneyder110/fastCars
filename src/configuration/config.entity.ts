import * as Joi from 'joi';

export const ConfigSchema = Joi.object({
  MONGO_INITDB_ROOT_USERNAME: Joi.string().required(),
  MONGO_INITDB_ROOT_PASSWORD: Joi.string().required(),
  MONGO_DB: Joi.string().required(),
  MONGO_PORT: Joi.string().required(),
  MONGO_HOST: Joi.string().required(),
  MONGO_CONNECTION: Joi.string().required(),
  PORT: Joi.number().required(),
  JWT_SECRET: Joi.string().required(),
});
