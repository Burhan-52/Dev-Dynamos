const CustomError = require('../Errors');
// const { VerifyToken } = require("../Utils/jwt.js");

const authenticateUser = async (req, res, next) => {
  const {accessToken,Refreshtoken} = req.signedCookies;
  try { 
    if (accessToken) {
      const payload = isTokenValid(accessToken);
      req.user = payload.user;
      return next();
    }
    const payload = isTokenValid(Refreshtoken);

    const existingToken = await Token.findOne({
      user: payload.user.userId,
      Refreshtoken: payload.Refreshtoken,
    });

    if (!existingToken || !existingToken?.isValid) {
      throw new CustomError.UnauthenticatedError('Authentication Invalid');
    }

    attachCookiesToResponse({
      res,
      user: payload.user,
      Refreshtoken: existingToken.Refreshtoken,
    });

    req.user = payload.user;
    next();
  } catch (error) {
    throw new CustomError.UnauthenticatedError('Authentication Invalid');
  }
};

 

module.exports = {
  authenticateUser, 
};
