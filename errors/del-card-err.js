const { ERROR_CODE_DEL_CARD } = require('../constants');

class DelCardError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = ERROR_CODE_DEL_CARD;
  }
}

module.exports = DelCardError;
