const { ERROR_CODE_BAD_AUTH } = require('../constants');

class BadAuthError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = ERROR_CODE_BAD_AUTH; // 401
  }
}

module.exports = BadAuthError;
