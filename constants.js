const ERROR_CODE_BAD_REQUEST = 400;
const ERROR_CODE_UNATHORIZED = 401;
const ERROR_CODE_FORBIDDEN = 403;
const ERROR_CODE_NOT_FOUND = 404;
const ERROR_CODE_CONFLICT = 409;
const ERROR_CODE_INTERNAL_SERVER_ERROR = 500;
const SEKRET_KEY = 'some-secret-key';
const AVATAR_REGEX = /^https?:\/\/(www\.)?[a-zA-Z\d-]+\.[\w\d\-.~:/?#[\]@!$&'()*+,;=]{2,}#?$/;

module.exports = {
  ERROR_CODE_BAD_REQUEST,
  ERROR_CODE_FORBIDDEN,
  ERROR_CODE_NOT_FOUND,
  ERROR_CODE_INTERNAL_SERVER_ERROR,
  ERROR_CODE_UNATHORIZED,
  ERROR_CODE_CONFLICT,
  SEKRET_KEY,
  AVATAR_REGEX,
};
