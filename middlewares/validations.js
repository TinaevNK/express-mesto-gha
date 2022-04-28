const { celebrate, Joi } = require('celebrate');
const { AVATAR_REGEX } = require('../constants');

// POST /signup
const validateCreateUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().pattern(AVATAR_REGEX),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

// POST /signin
const validateLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
});

// GET /users
const validateGetUsers = celebrate({
  headers: Joi.object().keys({
    authorization: Joi.string().min(2).max(200).required(),
  }).unknown(true),
});

// GET /users/:userId
const validateGetUserById = celebrate({
  params: Joi.object().keys({
    userId: Joi.string().required().length(24).hex(),
  }),
  headers: Joi.object().keys({
    authorization: Joi.string().min(2).max(200).required(),
  }).unknown(true),
});

// GET /users/me
const validateGetUserInfo = celebrate({
  headers: Joi.object().keys({
    authorization: Joi.string().min(2).max(200).required(),
  }).unknown(true),
});

// PATCH /users/me
const validateUpdateUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
  }),
  headers: Joi.object().keys({
    authorization: Joi.string().min(2).max(200).required(),
  }).unknown(true),
});

// PATCH /users/me/avatar
const validateUpdateAvatar = celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().pattern(AVATAR_REGEX),
  }),
  headers: Joi.object().keys({
    authorization: Joi.string().min(2).max(200).required(),
  }).unknown(true),
});

module.exports = {
  validateGetUsers,
  validateGetUserById,
  validateGetUserInfo,
  validateUpdateUser,
  validateUpdateAvatar,
  validateCreateUser,
  validateLogin,
};
