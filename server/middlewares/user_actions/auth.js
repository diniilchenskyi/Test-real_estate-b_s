const jwt = require('jsonwebtoken');
const User = require('../../models/userModel');
const ErrorHandler = require('../../utils/errorHandler');
const asyncErrorHandler = require('../helpers/asyncErrorHandler');

exports.isAuthenticatedUser = asyncErrorHandler(async (req, res, next) => {
    let token = req.cookies?.token;
    const authHeader = req.headers.authorization;
    if (!token && typeof authHeader === 'string' && authHeader.startsWith('Bearer ')) {
        token = authHeader.slice(7).trim();
    }

    if (!token) {
        return next(new ErrorHandler("Please Login to Access", 401))
    }

    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decodedData.id);
    next();
});

exports.authorizeRoles = (...roles) => {
    return (req, res, next) => {

        if (!roles.includes(req.user.role)) {
            return next(new ErrorHandler(`Role: ${req.user.role} is not allowed`, 403));
        }
        next();
    }
}