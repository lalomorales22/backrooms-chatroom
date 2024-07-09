const jwt = require('jsonwebtoken');
const { createError } = require('../../utils/error');

exports.authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return next(createError(401, 'Authorization header is missing'));
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
    return next(createError(401, 'Token is missing'));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: decoded.id };
    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return next(createError(401, 'Token has expired'));
    }
    next(createError(401, 'Invalid token'));
  }
};

exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return next(createError(403, 'You do not have permission to perform this action'));
    }
    next();
  };
};