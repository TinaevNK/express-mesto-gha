const { ERROR_CODE_INTERNAL } = require('../constants');

module.exports = (err, req, res, next) => {
  // если у ошибки нет статуса, выставляем 500
  const { statusCode = ERROR_CODE_INTERNAL, message } = err;
  res
    .status(statusCode)
    .send({
      // проверяем статус и выставляем сообщение в зависимости от него
      message: statusCode === ERROR_CODE_INTERNAL
        ? 'На сервере произошла ошибка.'
        : message,
    });
  next();
};
