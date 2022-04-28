const { celebrate, Joi } = require('celebrate');

// валидация регистрации (создание пользователя)
const validateCreateUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string(),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

// валидация входа
const validateLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
});

module.exports = {
  validateGetUsers,
  validateGetUserById,
  validateUpdateUser,
  validateCreateUser,
  validateUpdateAvatar,
  validateLogin,
  validateGetUserInfo,
  validateGetCards,
  validateDeleteCard,
  validateCreateCard,
  validateLikeCard,
  validateDislikeCard,
};