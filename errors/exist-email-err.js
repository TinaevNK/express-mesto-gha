const { ERROR_CODE_EXIST_EMAIL } = require('../constants');

class ExistEmailError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = ERROR_CODE_EXIST_EMAIL;
  }
}

module.exports = ExistEmailError;
