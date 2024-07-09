const crypto = require('crypto');

exports.generateRandomString = (length) => {
  return crypto.randomBytes(Math.ceil(length / 2))
    .toString('hex')
    .slice(0, length);
};

exports.sanitizeUser = (user) => {
  const { password, __v, ...sanitizedUser } = user.toObject();
  return sanitizedUser;
};

exports.createError = (statusCode, message) => {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
};

exports.asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);